import polyline from "google-polyline";
import _ from "lodash";
import BUS_TIMINGS_RAW from "./timings.tsv?raw";

import allBusesRouteLines from "./routelines.json";

import { getDistance } from "geolib";
import { STOPS_DATA } from "./constants";
import appStorage from "./storage";
import mapboxgl from "mapbox-gl";
import svgIconUp from "../assets/icon-bus-up-map.svg";
import svgIconDown from "../assets/icon-bus-down-map.svg";

export const readTSV = (csvString) => {
  const [headersText, ...dataLines] = _.split(csvString, "\r\n");
  const headers = _.split(headersText, "\t");
  return _.map(dataLines, line => {
    const splitLine = _.split(line, "\t");
    const data = {};
    _.each(headers, (h, index) => {
      const cellData = splitLine[index];
      data[h] = cellData;
    });
    return data;
  });
}

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

export const textToMinutes = (text) => {
  const [hours, minutes] = text.split(":");
  return _.toNumber(hours) * 60 + _.toNumber(minutes);
};

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
    const routePoints = polyline.decode(decodeURIComponent(allBusesRouteLines[b.routename]));
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
          coordinates: polyline.decode(decodeURIComponent(allBusesRouteLines[b.routename])),
        },
      })),
    },
  };
};

export const getVehiclesGeoJson = (liveBusData, routename) => {
  const points = [];
  if(liveBusData){
    for(var info of Object.keys(liveBusData)){
      for(var liKey of Object.keys(liveBusData[info])){
        const li = liveBusData[info][liKey];
        if(liKey !== 'pollDate'){
          if(routename){
            for(var l of li){
              if(l.routeno.toUpperCase() === routename.toUpperCase()){
                points.push(l);
              } else {
                // console.log(`filtered out ${l.regno} ${l.routeno}`);
                // console.log(l)
              }
            }
          } else {
            points.push(...li);
          }
        }
      }
    }
  }
  return {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: points.map((l) => ({
        type: "Feature",
        properties: {
          name: l.regno,
          refresh: l.refresh,
          routename: l.routeno,
          passed: l.lastKnownStop
        },
        geometry: {
          type: "Point",
          coordinates: [l.long, l.lat]
        }
      }))
    }
  }
}

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

let liveBusMarkerLayer = {};

export const setLiveBusMarkerLayer = (mapRef, geoJsonData) => {
  if(!mapRef || !mapRef.current){
    return;
  }
  for(const marker of Object.values(liveBusMarkerLayer)){
    marker.remove();
  }
  liveBusMarkerLayer = {};
  if(!geoJsonData){
    return;
  }
  for(const feature of geoJsonData.features){
    // if(liveBusMarkerLayer[feature.name]){
    //   liveBusMarkerLayer[feature.name].setLngLat(feature.geometry.coordinates);
    // } else {
    const el = document.createElement("div");
    // el.className = `live-bus-${feature.properties.routename.includes('UP') ? 'up' : 'down'}-marker`;
    fetch(feature.properties.routename.includes('UP') ? iconBusUp : iconBusDown)
    .then( svgIcon => svgIcon.text()
    .then(
      svgText => 
        {
          const scalePercent = 1 + (mapRef.current.getZoom() - 22)  * 0.05;
          el.innerHTML += svgText;
          const svgElement = el.children[0];
          if(svgElement){
            svgElement.style.transform = `scale(${scalePercent})`;
            svgElement.style.transformOrigin = 'center';
          }
        }
    ));
    const popup = new mapboxgl.Popup({closeButton: false});
    liveBusMarkerLayer[feature.properties.name] = new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(mapRef.current);
    const markerDiv = liveBusMarkerLayer[feature.properties.name].getElement();
    markerDiv.addEventListener('mouseenter', () => {
      const datePattern = /^(\d{2})-(\d{2})-(\d{4})\s(\d{1,2}):(\d{2}):(\d{2})$/;
      const [, day, month, year, rawHour, min] = datePattern.exec(feature.properties.refresh);
      const updatedDate = new Date(`${year}-${month}-${day}T${('0' + rawHour).slice(-2)}:${min}:00`);
      const updated = Math.floor((Date.now() - updatedDate)/1000);
      const description = `
      <h5 class="bus-modal-map-small">Bus route</h5>
      <h2 class="bus-modal-map-large">${feature.properties.routename.replace("UP", "to Airport").replace("DOWN", "from Airport")}</h2>
      <h5 class="bus-modal-map-small">Bus registration number</h5>
      <h2 class="bus-modal-map-large">${feature.properties.name}</h2>
      <h5 class="bus-modal-map-small">Last seen</h5>
      <h2 class="bus-modal-map-large">${feature.properties.passed}</h2>
      <h5 class="bus-modal-map-time">Updated ${updated <= 60 ? `${updated} seconds` : (Math.floor(updated/60) > 1 ? `${Math.floor(updated/60)} minutes` : `${Math.floor(updated/60)} minute`)} ago</h5>
      `
      popup.setHTML(description).addTo(mapRef.current);
    });
    markerDiv.addEventListener('mouseleave', () => {
      popup.remove();
    });
    mapRef.current.on('zoom', () => {
      const scalePercent = 1 + (mapRef.current.getZoom() - 22)  * 0.05;
      const svgElement = markerDiv.children[0];
      if(svgElement){
        svgElement.style.transform = `scale(${scalePercent})`;
        svgElement.style.transformOrigin = 'center';
      }
    });
  }
};

export const getCurrentMsm = () =>
  Math.floor((new Date() - new Date().setHours(0, 0, 0, 0)) / 60000);

const ALL_BUSES_TIMINGS = {};
_.each(
  readTSV(BUS_TIMINGS_RAW),
  ({ route_no, time, duration }) => {
    const durationMinutes = textToMinutes(duration);
      ALL_BUSES_TIMINGS[route_no] = _.map(_.split(time, " "), t => ({
        start: textToMinutes(t),
        duration: durationMinutes,
      }));
  }
);

export { ALL_BUSES_TIMINGS };