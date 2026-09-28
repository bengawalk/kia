/*
  Generates the bus data used by the app from the BMTC GTFS feed at https://github.com/Vonter/bmtc-gtfs
    - src/utils/timings.tsv     Departure times from the starting point and journey duration
    - src/utils/stops.json      Intermediate stops with distance along the route
    - src/utils/routelines.json Encoded route line for the map

  Usage:
    node scripts/update_from_gtfs.mjs             Downloads and extracts the latest feed
    node scripts/update_from_gtfs.mjs <gtfs-dir>  Uses an already extracted feed

  Keys are "<route> UP" for trips ending at the airport and "<route> DOWN" for trips starting at it.
  Direction is decided by the trip's stops rather than the upstream label, which is sometimes inverted.
  Routes only present in BUS_DATA (src/utils/constants.js) are shown in the app.
*/

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import _ from "lodash";
import polyline from "google-polyline";
import jsonStringify from "fast-json-stable-stringify";

const GTFS_URL = "https://github.com/Vonter/bmtc-gtfs/raw/main/gtfs/bmtc.zip";
const KIA_ROUTE_REGEX = /^KIA-[0-9A-Z]+$/;
const AIRPORT = { lat: 13.199110535079635, lng: 77.70822021568426 }; // STOPS_DATA.airport
const AIRPORT_RADIUS_M = 1500;
// When snapping stops to the route line, the first point this close to a stop is treated as the match.
// Prevents a stop from being matched to a later part of the route that passes nearby.
const SNAP_RADIUS_M = 150;

// Sanity checks. Fail instead of publishing broken data
const MIN_ROUTE_KEYS = 15;
const MIN_STOPS_PER_ROUTE = 5;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../src/utils");
const TIMINGS_FILE = path.join(OUTPUT_DIR, "timings.tsv");
const STOPS_FILE = path.join(OUTPUT_DIR, "stops.json");
const ROUTELINES_FILE = path.join(OUTPUT_DIR, "routelines.json");

// Minimal CSV line parser. Handles quoted fields with commas and escaped quotes
const parseCsvLine = (line) => {
  const fields = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"' && line[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      fields.push(field);
      field = "";
    } else {
      field += char;
    }
  }
  fields.push(field);
  return fields;
};

// Streams a GTFS file row by row. Needed for stop_times.txt and shapes.txt which are 100MB+
const readGtfsFile = async (gtfsDir, fileName, onRow) => {
  const filePath = path.join(gtfsDir, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing ${fileName} in ${gtfsDir}`);
  }
  const lines = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });
  let headers = null;
  for await (const rawLine of lines) {
    const line = headers ? rawLine : rawLine.replace(/^﻿/, "");
    if (!line) continue;
    const values = parseCsvLine(line);
    if (!headers) {
      headers = values;
      continue;
    }
    onRow(_.zipObject(headers, values));
  }
};

const distanceInMeters = (lat1, lng1, lat2, lng2) => {
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 6371000 * 2 * Math.asin(Math.sqrt(a));
};

const isNearAirport = (stop) =>
  distanceInMeters(stop.lat, stop.lng, AIRPORT.lat, AIRPORT.lng) <
  AIRPORT_RADIUS_M;

// GTFS times can go past 24:00 for trips running after midnight
const gtfsTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(":");
  return Number(hours) * 60 + Number(minutes);
};

const minutesToText = (totalMinutes) => {
  const minutesInDay = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(minutesInDay / 60);
  const minutes = minutesInDay % 60;
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

const median = (values) => {
  const sorted = _.sortBy(values);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[mid]
    : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
};

const compareRouteKeys = (a, b) => a.localeCompare(b, "en", { numeric: true });

const downloadFeed = async () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "bmtc-gtfs-"));
  const zipPath = path.join(tmpDir, "bmtc.zip");
  console.error(`Downloading ${GTFS_URL}`);
  const response = await fetch(GTFS_URL);
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status}`);
  }
  fs.writeFileSync(zipPath, Buffer.from(await response.arrayBuffer()));
  const gtfsDir = path.join(tmpDir, "gtfs");
  execFileSync("unzip", ["-q", "-o", zipPath, "-d", gtfsDir]);
  return gtfsDir;
};

// Snaps each stop to the route line in order and returns the distance along the line in meters
const getStopDistancesAlongShape = (stops, shapePoints) => {
  const cumulative = [0];
  for (let i = 1; i < shapePoints.length; i++) {
    const [prevLat, prevLng] = shapePoints[i - 1];
    const [lat, lng] = shapePoints[i];
    cumulative.push(
      cumulative[i - 1] + distanceInMeters(prevLat, prevLng, lat, lng),
    );
  }

  let startIndex = 0;
  return stops.map((stop) => {
    const distances = shapePoints.map(([lat, lng], i) =>
      i < startIndex
        ? Infinity
        : distanceInMeters(stop.lat, stop.lng, lat, lng),
    );
    let index = _.findIndex(distances, (d) => d < SNAP_RADIUS_M, startIndex);
    if (index === -1) {
      // Stop is far from the line. Use the closest point that isn't behind the previous stop
      index = distances.indexOf(_.min(distances));
    } else {
      // Walk to the closest point in this stretch of the line
      while (
        index + 1 < distances.length &&
        distances[index + 1] <= distances[index]
      ) {
        index++;
      }
    }
    startIndex = index;
    return cumulative[index];
  });
};

const readPreviousKeys = () => {
  if (!fs.existsSync(TIMINGS_FILE)) return [];
  const [, ...lines] = fs.readFileSync(TIMINGS_FILE, "utf8").split(/\r?\n/);
  return _.compact(lines.map((l) => l.split("\t")[0]));
};

const main = async () => {
  // Read before anything is written so the summary can compare against the old data
  const previousKeys = readPreviousKeys();
  const gtfsDir = process.argv[2] || (await downloadFeed());

  let feedVersion = "unknown";
  await readGtfsFile(gtfsDir, "feed_info.txt", (row) => {
    feedVersion = row.feed_version || feedVersion;
  });

  const routeNames = {}; // route_id -> route_short_name
  await readGtfsFile(gtfsDir, "routes.txt", (row) => {
    if (KIA_ROUTE_REGEX.test(row.route_short_name)) {
      routeNames[row.route_id] = row.route_short_name;
    }
  });

  const trips = {}; // trip_id -> { routeName, shapeId, stopTimes }
  await readGtfsFile(gtfsDir, "trips.txt", (row) => {
    if (routeNames[row.route_id]) {
      trips[row.trip_id] = {
        routeName: routeNames[row.route_id],
        shapeId: row.shape_id,
        stopTimes: [],
      };
    }
  });

  await readGtfsFile(gtfsDir, "stop_times.txt", (row) => {
    const trip = trips[row.trip_id];
    if (trip) {
      trip.stopTimes.push({
        stopId: row.stop_id,
        sequence: Number(row.stop_sequence),
        arrival: gtfsTimeToMinutes(row.arrival_time),
        departure: gtfsTimeToMinutes(row.departure_time),
      });
    }
  });
  _.each(trips, (trip) => {
    trip.stopTimes = _.sortBy(trip.stopTimes, "sequence");
  });

  const stops = {}; // stop_id -> { name, lat, lng }
  await readGtfsFile(gtfsDir, "stops.txt", (row) => {
    stops[row.stop_id] = {
      name: row.stop_name,
      lat: Number(row.stop_lat),
      lng: Number(row.stop_lon),
    };
  });

  const kannadaStopNames = {}; // stop_id -> name
  await readGtfsFile(gtfsDir, "translations.txt", (row) => {
    if (
      row.table_name === "stops" &&
      row.field_name === "stop_name" &&
      row.language === "kn"
    ) {
      // Translations end with a "(towards <next stop>)" suffix which the English names don't have
      kannadaStopNames[row.record_id] = row.translation
        .replace(/\s*\(ಟುವರ್ಡ್ಸ್.*$/, "")
        .trim();
    }
  });

  // Group trips by shape and decide the direction of each group from its most complete trip
  const routeGroups = {}; // "<route> UP|DOWN" -> { canonicalTrip, trips }
  const warnings = [];
  _.each(_.groupBy(_.values(trips), "shapeId"), (shapeTrips, shapeId) => {
    const canonicalTrip = _.maxBy(shapeTrips, (t) => t.stopTimes.length);
    if (canonicalTrip.stopTimes.length < 2) {
      warnings.push(`Skipped ${shapeId}: no trip with more than one stop`);
      return;
    }
    const origin = stops[_.first(canonicalTrip.stopTimes).stopId];
    const destination = stops[_.last(canonicalTrip.stopTimes).stopId];
    let direction;
    if (isNearAirport(destination) && !isNearAirport(origin)) {
      direction = "UP";
    } else if (isNearAirport(origin) && !isNearAirport(destination)) {
      direction = "DOWN";
    } else {
      warnings.push(
        `Skipped ${shapeId}: can't tell direction (${origin.name} to ${destination.name})`,
      );
      return;
    }
    const key = `${canonicalTrip.routeName} ${direction}`;
    const existing = routeGroups[key];
    if (existing) {
      warnings.push(
        `Multiple shapes for ${key}. Keeping the one with more trips`,
      );
      if (existing.trips.length >= shapeTrips.length) return;
    }
    routeGroups[key] = { canonicalTrip, trips: shapeTrips };
  });

  const neededShapes = new Set(
    _.map(routeGroups, (g) => g.canonicalTrip.shapeId),
  );
  const shapes = {}; // shape_id -> [[lat, lng, sequence]]
  await readGtfsFile(gtfsDir, "shapes.txt", (row) => {
    if (neededShapes.has(row.shape_id)) {
      (shapes[row.shape_id] ||= []).push([
        Number(row.shape_pt_lat),
        Number(row.shape_pt_lon),
        Number(row.shape_pt_sequence),
      ]);
    }
  });

  const timings = {};
  const stopsData = {};
  const routelines = {};
  const errors = [];

  _.each(routeGroups, ({ canonicalTrip, trips: groupTrips }, key) => {
    const originId = _.first(canonicalTrip.stopTimes).stopId;
    const destinationId = _.last(canonicalTrip.stopTimes).stopId;

    // Upstream has some trips with only a few stops. Their departure still counts if it's from the origin
    const tripsFromOrigin = _.filter(
      groupTrips,
      (t) => t.stopTimes.length > 0 && t.stopTimes[0].stopId === originId,
    );
    const skippedTrips = groupTrips.length - tripsFromOrigin.length;
    if (skippedTrips > 0) {
      warnings.push(
        `${key}: ignored ${skippedTrips} trip(s) not starting at the origin`,
      );
    }
    const departures = _.sortBy(
      _.uniq(tripsFromOrigin.map((t) => t.stopTimes[0].departure % 1440)),
    );

    const fullTrips = _.filter(
      tripsFromOrigin,
      (t) =>
        t.stopTimes.length > 1 && _.last(t.stopTimes).stopId === destinationId,
    );
    const duration = median(
      fullTrips.map((t) => {
        const minutes = _.last(t.stopTimes).arrival - t.stopTimes[0].departure;
        return minutes < 0 ? minutes + 1440 : minutes;
      }),
    );

    const shapePoints = _.sortBy(shapes[canonicalTrip.shapeId] || [], 2).map(
      ([lat, lng]) => [lat, lng],
    );
    if (shapePoints.length < 2) {
      errors.push(`${key}: missing route line (${canonicalTrip.shapeId})`);
      return;
    }

    const routeStops = canonicalTrip.stopTimes.map((st) => ({
      id: st.stopId,
      ...stops[st.stopId],
    }));
    const distances = getStopDistancesAlongShape(routeStops, shapePoints);
    const toKm = (meters) => _.round((meters - distances[0]) / 1000, 3);

    if (departures.length === 0) {
      errors.push(`${key}: no departures`);
    }
    if (routeStops.length < MIN_STOPS_PER_ROUTE) {
      errors.push(`${key}: only ${routeStops.length} stops`);
    }

    timings[key] = { departures, duration };
    stopsData[key] = {
      totalDistance: toKm(_.last(distances)),
      // Only intermediate stops. The start and end come from BUS_DATA
      stops: routeStops.slice(1, -1).map((s, i) => ({
        name: s.name,
        name_kn: kannadaStopNames[s.id] || s.name,
        loc: [s.lat, s.lng],
        distance: toKm(distances[i + 1]),
      })),
    };
    // Same format as the old geojson based script: [lng, lat] pairs, encoded and URI escaped
    routelines[key] = encodeURIComponent(
      polyline.encode(shapePoints.map(([lat, lng]) => [lng, lat])),
    );
  });

  const keys = Object.keys(timings).sort(compareRouteKeys);
  if (keys.length < MIN_ROUTE_KEYS) {
    errors.push(
      `Only ${keys.length} routes found. Expected at least ${MIN_ROUTE_KEYS}`,
    );
  }

  warnings.forEach((w) => console.error(`Warning: ${w}`));
  if (errors.length > 0) {
    errors.forEach((e) => console.error(`Error: ${e}`));
    throw new Error("Sanity checks failed. Bus data not updated");
  }

  const timingsLines = [
    "route_no\ttime\tduration",
    ...keys.map((key) => {
      const { departures, duration } = timings[key];
      return `${key}\t${departures.map(minutesToText).join(" ")}\t${minutesToText(duration)}`;
    }),
  ];
  // readTSV in src/utils/index.jsx splits on \r\n
  fs.writeFileSync(TIMINGS_FILE, timingsLines.join("\r\n"));
  fs.writeFileSync(STOPS_FILE, jsonStringify(stopsData));
  fs.writeFileSync(
    ROUTELINES_FILE,
    `${JSON.stringify(
      _.fromPairs(keys.map((k) => [k, routelines[k]])),
      null,
      2,
    )}\n`,
  );

  // Summary on stdout. Used as the commit message body by the update-data workflow
  const added = _.difference(keys, previousKeys);
  const dropped = _.difference(previousKeys, keys);
  console.log(`Feed version: ${feedVersion}`);
  console.log(`Routes: ${keys.length}`);
  if (added.length) console.log(`Added: ${added.join(", ")}`);
  if (dropped.length) console.log(`Dropped: ${dropped.join(", ")}`);
};

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
