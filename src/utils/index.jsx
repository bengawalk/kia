import polyline from "google-polyline";
import _ from "lodash";
import {useEffect, useState} from "react";
import {STOPS_DATA} from "./constants";
import {getDistance} from "geolib";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );
  return debouncedValue;
}

export const getSuggestedBus = (buses, targetLocation) => {
  // Get the most optimum bus to take to reach the airport
  // At present this is the combination of the closest routes to the location
  // and the next available time. Lower distance and lower time is better.
  if(!targetLocation) {
    return null;
  }
  const pointToCompare = buses[0].start === STOPS_DATA.airport ? "end" : "start";
  return _.minBy(buses, b => getDistance(
    { latitude: targetLocation.lat, longitude: targetLocation.lng },
    { latitude: b[pointToCompare].loc[0], longitude: b[pointToCompare].loc[1] }
  )).name;
};

export const saveLocationMedata = (placeId, name, location) => {
  const locations = JSON.parse(localStorage.getItem("locations") || "[]");
  const hasSamePlaceId = _.some(locations, { placeId });
  // If there already exists a location in the list with the exact place id, don't add it again
  localStorage.setItem("locations", JSON.stringify([
    ...locations,
    ...(hasSamePlaceId ? [] : [{
      placeId,
      name,
      location,
    }])
  ]))
};

export const getRoutesGeojson = (busData) => ({
  type: "geojson",
  data: {
    "type": "FeatureCollection",
    "features": busData.map(b => ({
      'type': 'Feature',
      'properties': {
        name: b.name,
      },
      'geometry': {
        'type': 'LineString',
        'coordinates':
          polyline.decode(decodeURIComponent(b.route)),
      }
    }))
  },
});

export const getStopsGeoJson = (busData, selectedTab) => ({
  type: "geojson",
  data: {
    "type": "FeatureCollection",
    "features": busData.map(b => ({
      'type': 'Feature',
      'properties': {
        name: selectedTab === 'ta' ? b.start.name : b.end.name,
      },
      'geometry': {
        type: "Point",
        'coordinates': selectedTab === 'ta' ? Array.from(b.start.loc).reverse() : Array.from(b.end.loc).reverse(),
      }
    }))
  },
})

export const getCurrentMsm = () => Math.floor((new Date() - (new Date()).setHours(0, 0, 0, 0))/60000);
