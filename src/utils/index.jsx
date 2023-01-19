import polyline from "google-polyline";
import _ from "lodash";

import { getDistance } from "geolib";
import { STOPS_DATA } from "./constants";

export const stopPropagation = (e) => {
  e.stopPropagation();
};

const dummyFunction = () => {};
// Google Maps library requires a global JS function as callback after load
window.dummyFunction = dummyFunction;

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
  const locations = JSON.parse(localStorage.getItem("locations") || "[]");
  const samePlaceIdEntry = _.find(locations, { placeId });
  // Track the time a new location is saved
  const saveTime = new Date().getTime();
  if (samePlaceIdEntry) {
    samePlaceIdEntry.time = saveTime;
  }
  // If there already exists a location in the list with the exact place id, don't add it again
  localStorage.setItem(
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

export const getRoutesGeojson = (busData) => ({
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: busData.map((b) => ({
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
});

export const getStopsGeoJson = (busData, selectedTab) => ({
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: busData.map((b) => ({
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
});

export const getCurrentMsm = () =>
  Math.floor((new Date() - new Date().setHours(0, 0, 0, 0)) / 60000);
