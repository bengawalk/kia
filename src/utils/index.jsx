import polyline from "google-polyline";
import {useEffect, useState} from "react";

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

export const getStopsGeoJson = (busData) => ({
  type: "geojson",
  data: {
    "type": "FeatureCollection",
    "features": busData.map(b => ({
      'type': 'Feature',
      'properties': {
        name: b.start.name,
      },
      'geometry': {
        type: "Point",
        'coordinates': b.start.loc.reverse(),
      }
    }))
  },
})

export const getCurrentMsm = () => Math.floor((new Date() - (new Date()).setHours(0, 0, 0, 0))/60000);
