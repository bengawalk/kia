import polyline from "google-polyline";
import _ from "lodash";
import ALL_BUSES_TIMINGS from "./timings.json";

import { getDistance } from "geolib";
import { STOPS_DATA } from "./constants";
import appStorage from "./storage";

export const stopPropagation = (e) => {
  e.stopPropagation();
};

export const getHoursAndMinutes = (minutesSinceMidnight) => {
  const hours = Math.floor(minutesSinceMidnight / 60);
  const minutes = minutesSinceMidnight - hours * 60;
  return {
    hours,
    minutes,
  };
};

export const timeTextDisplay = (number) =>
  number < 10 ? `0${number}` : number;

export const getSuggestedBus = (buses, targetLocation) => {
  // Get the most optimum bus to take to reach the airport
  // At present this is the combination of the closest routes to the location
  // and the next available time. Lower distance and lower time is better.
  if (!targetLocation) {
    return null;
  }

  const distanceToTarget = (lat, lng) =>
    getDistance(
      { latitude: targetLocation.lat, longitude: targetLocation.lng },
      {
        latitude: lat,
        longitude: lng,
      },
    );

  const busParameters = _.map(buses, (b) => {
    const pointToCompare =
      buses[0].start === STOPS_DATA.airport ? "end" : "start";
    const routePoints = polyline.decode(decodeURIComponent(b.route));
    const nearestPoint = _.minBy(routePoints, (r) =>
      distanceToTarget(r[1], r[0]),
    );
    return {
      minDistance: distanceToTarget(nearestPoint[1], nearestPoint[0]),
      stopDistance: distanceToTarget(
        b[pointToCompare].loc[0],
        b[pointToCompare].loc[1],
      ),
      name: b.name,
    };
  });

  const sortedBuses = _.sortBy(busParameters, [
    // Use a 50m accuracy. There are some routes with the nearest point
    // slightly higher than the closest but a much closer bus stop
    (b) => Math.ceil(b.minDistance / 50) * 50,
    "stopDistance",
  ]);

  return sortedBuses[0].name;
};

export const saveLocationMetadata = (placeId, name, location) => {
  const locations = JSON.parse(appStorage.getItem("locations") || "[]");
  const samePlaceIdEntry = _.find(locations, { placeId });
  // Track the time a new location is saved
  const saveTime = new Date().getTime();
  if (samePlaceIdEntry) {
    samePlaceIdEntry.time = saveTime;
  }
  // If there already exists a location in the list with the exact place id, don't add it again
  appStorage.setItem(
    "locations",
    JSON.stringify([
      ...locations,
      ...(samePlaceIdEntry
        ? []
        : [
            {
              placeId,
              name,
              location,
              time: saveTime,
            },
          ]),
    ]),
  );
};

export const getRoutesGeojson = (busData) => {
  const filteredBusData = _.filter(
    busData,
    (b) => _.size(ALL_BUSES_TIMINGS[b.routename]) > 0,
  );
  return {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: filteredBusData.map((b) => ({
        type: "Feature",
        properties: {
          name: b.name,
        },
        geometry: {
          type: "LineString",
          coordinates: polyline.decode(decodeURIComponent(b.route)),
        },
      })),
    },
  };
};

export const getStopsGeoJson = (busData, selectedTab) => {
  const filteredBusData = _.filter(
    busData,
    (b) => _.size(ALL_BUSES_TIMINGS[b.routename]) > 0,
  );
  return {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: filteredBusData.map((b) => ({
        type: "Feature",
        properties: {
          name: selectedTab === "ta" ? b.start.name : b.end.name,
        },
        geometry: {
          type: "Point",
          coordinates:
            selectedTab === "ta"
              ? Array.from(b.start.loc).reverse()
              : Array.from(b.end.loc).reverse(),
        },
      })),
    },
  };
};

export const getIntermediateStopsGeoJson = (listOfStops) => {
  return {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: listOfStops.map((s) => ({
        type: "Feature",
        properties: {
          name: s.name,
        },
        geometry: {
          type: "Point",
          coordinates: Array.from(s.loc).reverse(),
        },
      })),
    },
  };
};

export const getCurrentMsm = () =>
  Math.floor((new Date() - new Date().setHours(0, 0, 0, 0)) / 60000);

// To add a new route from the Backend API response for /RoutePoints
// const backendResponse = "";
// console.log(encodeURIComponent(
//   polyline.encode(JSON.parse(backendResponse).data.map(b => ([_.toNumber(b.longitude), _.toNumber(b.latitude)])))
// ));
