import polyline from "google-polyline";
import _, { isUndefined } from "lodash";
import BUS_TIMINGS_RAW from "./timings.tsv?raw";

import allBusesRouteLines from "./routelines.json";

import { getDistance } from "geolib";
import { LIVE_SOURCE, STOPS_DATA, BMTC_API_ENDPOINT, CORS_ANYWHERE, USE_LIVE_SOURCE } from "./constants";
import appStorage from "./storage";
import mapboxgl from "mapbox-gl";
import iconBusUp from "../assets/icon-bus-up-map.svg";
import iconBusDown from "../assets/icon-bus-down-map.svg";
import ALL_BUSES_STOPS from "../utils/stops.json";
import PARENT_IDS from "../utils/bmtc_api_data.json";

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
              if((l.routeno.toUpperCase() === routename.toUpperCase()) || 
              (l.routeno.toUpperCase().replace(' UP', '').replace(' DOWN', '') === routename.toUpperCase())){ 
                // Matched either routeno as a whole or just the KIA-# part
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

export const clearLiveBusMarkerLayer = (mapRef) => {
  if(!mapRef || !mapRef.current){
    return;
  }
  for(const marker of Object.values(liveBusMarkerLayer)){
    marker.remove(); // hard reset layer
  }
  liveBusMarkerLayer = {};
}

export const setLiveBusMarkerLayer = (mapRef, geoJsonData) => {
  if(!mapRef || !mapRef.current){
    return;
  }
  if(!geoJsonData){
    return;
  }
  const busMarkers = []

  fetch(iconBusDown).then(svgDown => svgDown.text())
  .then(downIcon => {
    fetch(iconBusUp).then(svgUp => svgUp.text()).then(
      upIcon => {
        // All fetching is done, we have downIcon and upIcon fetched to inject into our new elements
        // We wont face much lag in placing new elements or making old elements hidden
        for(const feature of geoJsonData.features){
          if(liveBusMarkerLayer[feature.properties.name]){ // if they exist, make them visible again
            // console.log(`${feature.properties.name} MARKER REMAINS`)
            const marker = liveBusMarkerLayer[feature.properties.name];

            marker.setLngLat(feature.geometry.coordinates);
            const popup = marker.getPopup();
            const getPopupDescription = () => {
              const datePattern = /^(\d{2})-(\d{2})-(\d{4})\s(\d{1,2}):(\d{2}):(\d{2})$/;
              const [, day, month, year, rawHour, min] = datePattern.exec(feature.properties.refresh);
              const updatedDate = new Date(`${year}-${month}-${day}T${('0' + rawHour).slice(-2)}:${min}:00`);
              const updated = Math.floor((Date.now() - updatedDate)/1000);
              return `
              <h5 class="bus-modal-map-small">Bus route</h5>
              <h2 class="bus-modal-map-large">${feature.properties.routename.replace("UP", "to Airport").replace("DOWN", "from Airport")}</h2>
              <h5 class="bus-modal-map-small">Bus registration number</h5>
              <h2 class="bus-modal-map-large">${feature.properties.name}</h2>
              <h5 class="bus-modal-map-small">Last seen</h5>
              <h2 class="bus-modal-map-large">${feature.properties.passed}</h2>
              <h5 class="bus-modal-map-time">Updated ${updated <= 60 ? `${updated} seconds` : (Math.floor(updated/60) > 1 ? `${Math.floor(updated/60)} minutes` : `${Math.floor(updated/60)} minute`)} ago</h5>
              `;
            };
            const markerDiv = marker.getElement();
            markerDiv
            markerDiv.addEventListener('mouseenter', () => {
              const description = getPopupDescription();
              popup.setHTML(description).addTo(mapRef.current);
            });
            markerDiv.addEventListener('touchend', event => {
              const target = event.target;
              const markerWasTapped = markerDiv.contains(target);
              if(markerWasTapped){
                const description = getPopupDescription();
                popup.setHTML(description).addTo(mapRef.current);
              }
              // Mapbox handles this for us
              //  else {
              //   popup.remove();
              // }
            });
            markerDiv.addEventListener('mouseenter', () => {
              const description = getPopupDescription();
              popup.setHTML(description).addTo(mapRef.current);
            });
            markerDiv.addEventListener('mouseleave', () => {
              popup.remove();
            });
            // liveBusMarkerLayer[feature.properties.name].setAttribute("style", "visibility: visible;")
            busMarkers.push(liveBusMarkerLayer[feature.properties.name])
          } else {  // Create the marker element
          // // Scale the initial icon to the current zoom level
          // const scalePercent = 1 + (mapRef.current.getZoom() - 22)  * 0.05;
            const el = document.createElement("div");
            el.innerHTML += feature.properties.routename.includes('UP') ? upIcon : downIcon;
          // const svgElement = el.children[0]; 
          // if(svgElement){
          //   svgElement.style.transform = `scale(${scalePercent})`;
          //   svgElement.style.transformOrigin = 'center';
          // }
    const getPopupDescription = () => {
      const datePattern = /^(\d{2})-(\d{2})-(\d{4})\s(\d{1,2}):(\d{2}):(\d{2})$/;
      const [, day, month, year, rawHour, min] = datePattern.exec(feature.properties.refresh);
      const updatedDate = new Date(`${year}-${month}-${day}T${('0' + rawHour).slice(-2)}:${min}:00`);
      const updated = Math.floor((Date.now() - updatedDate)/1000);
      return `
      <h5 class="bus-modal-map-small">Bus route</h5>
      <h2 class="bus-modal-map-large">${feature.properties.routename.replace("UP", "to Airport").replace("DOWN", "from Airport")}</h2>
      <h5 class="bus-modal-map-small">Bus registration number</h5>
      <h2 class="bus-modal-map-large">${feature.properties.name}</h2>
      <h5 class="bus-modal-map-small">Last seen</h5>
      <h2 class="bus-modal-map-large">${feature.properties.passed}</h2>
      <h5 class="bus-modal-map-time">Updated ${updated <= 60 ? `${updated} seconds` : (Math.floor(updated/60) > 1 ? `${Math.floor(updated/60)} minutes` : `${Math.floor(updated/60)} minute`)} ago</h5>
      `;
    };
    const popup = new mapboxgl.Popup({closeButton: false});
    liveBusMarkerLayer[feature.properties.name] = new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(mapRef.current);
    const markerDiv = liveBusMarkerLayer[feature.properties.name].getElement();
    markerDiv.addEventListener('mouseenter', () => {
      const description = getPopupDescription();
      popup.setHTML(description).addTo(mapRef.current);
    });
    markerDiv.addEventListener('touchend', event => {
      const target = event.target;
      const markerWasTapped = markerDiv.contains(target);
      if(markerWasTapped){
        const description = getPopupDescription();
        popup.setHTML(description).addTo(mapRef.current);
      }
      // Mapbox handles this for us
      //  else {
      //   popup.remove();
      // }
    });
    markerDiv.addEventListener('mouseenter', () => {
      const description = getPopupDescription();
      popup.setHTML(description).addTo(mapRef.current);
    });
    markerDiv.addEventListener('mouseleave', () => {
      popup.remove();
    });
    busMarkers.push(liveBusMarkerLayer[feature.properties.name]);
    // // Maintain icon size relative to map size on zoom change
    // mapRef.current.on('zoom', () => {
    //   const scalePercent = 1 + (mapRef.current.getZoom() - 22)  * 0.05;
    //   const svgElement = markerDiv.children[0];
    //   if(svgElement){
    //     svgElement.style.transform = `scale(${scalePercent})`;
    //     svgElement.style.transformOrigin = 'center';
    //   }
    // });

          }
        }

        for(const marker of Object.keys(liveBusMarkerLayer)){
          // marker.remove(); // instead of removing, we can make them invisible
          if(!busMarkers.includes(liveBusMarkerLayer[marker])) {
            // console.log("A MARKER WAS DELETED");
            liveBusMarkerLayer[marker].remove();
            delete liveBusMarkerLayer[marker];
            // marker.getElement().setAttribute("style", "visibility: hidden;");
          }
        }
      }
    )
  })
};

// const updateBusData = (newData, setLiveBusData) => {
//   setLiveBusData(newData);
//   const currentRef = mapRef.current;
//   if(currentRef){
//     setLiveBusMarkerLayer(mapRef, getVehiclesGeoJson(newData).data);
//   }
// } 
const constructBusData = (data, routename) => {
  const name = routename.replace(' UP', '').replace(' DOWN', '');
  const stop_names = ALL_BUSES_STOPS[routename].stops.map(item => item.name); // We need to add kannada names properly here, then we can map kannada names provided by api as well
  const stop_names_kn = ALL_BUSES_STOPS[routename].stops.map(item => item.name_kn); 
  // Modify data to remove unnecessary info and put only bus data in state
  const newData = {};
  if(data.up.data.length > 0){
    const suffix = "UP";
    const fallbackName = ALL_BUSES_STOPS[`${name} ${suffix}`].stops[0].name;
    const vehicles = {}; // Vehicle ID: Last Stop, Current Stop, Last Known Stop (Known as in matched with local data), Lat and Long, Reg Number
    for(var stopData of data.up.data){
      const currStop = stopData.stationname;
      const currStopId = stopData.stationid;
      if(stopData.vehicleDetails.length > 0){
        var stopCoveredAll = 1;
        for(var vehicleData of stopData.vehicleDetails){
          if(!vehicles[vehicleData.vehicleid]){
            vehicles[vehicleData.vehicleid] = {
              regno: vehicleData.vehiclenumber,
              lat: vehicleData.centerlat,
              long: vehicleData.centerlong,
              refresh: vehicleData.lastrefreshon,
              currentStop: currStop,
              lastStop: stopData.from,
              lastKnownStop: stop_names.includes(stopData.from) ? stopData.from : fallbackName,
              stopCovered: vehicleData.stopCoveredStatus,
              stopCoveredOriginal: vehicleData.stopCoveredStatus, // Save original as well for bad data
              routeno: `${stopData.routeno} ${suffix}`,
              direction: suffix,
              currentStopLocationId: vehicleData.currentlocationid
            };
          }
          if(vehicles[vehicleData.vehicleid].stopCovered === 1 || vehicles[vehicleData.vehicleid].stopCoveredOriginal === 0){
            stopCoveredAll = 0;
            if(stop_names.includes(vehicles[vehicleData.vehicleid].currentStop)){
              vehicles[vehicleData.vehicleid].lastKnownStop = vehicles[vehicleData.vehicleid].currentStop;
            }
            vehicles[vehicleData.vehicleid].lastStop = vehicles[vehicleData.vehicleid].currentStop;
            vehicles[vehicleData.vehicleid].currentStop = currStop;
            vehicles[vehicleData.vehicleid].stopCovered = vehicleData.stopCoveredStatus;
            if(vehicles[vehicleData.vehicleid].currentStopLocationId == currStopId) {
              vehicles[vehicleData.vehicleid].stopCoveredOriginal = 1;
            }
          }
        }
        if(stopCoveredAll === 1){
          break;
        }
      }
    }
    newData[`${name} ${suffix}`] = {pollDate: Date.now()} // Instantiate our direction obj
    for(var vehicle of Object.values(vehicles)){
      if(!newData[`${name} ${suffix}`][vehicle.lastKnownStop]){
        newData[`${name} ${suffix}`][vehicle.lastKnownStop] = []
      }
      newData[`${name} ${suffix}`][vehicle.lastKnownStop].push(vehicle)
    }
  }
  if(data.down.data.length > 0){
    const suffix = "DOWN";
    const fallbackName = ALL_BUSES_STOPS[`${name} ${suffix}`].stops[0].name;
    const vehicles = {}; // Vehicle ID: Last Stop, Current Stop, Last Known Stop (Known as in matched with local data), Lat and Long, Reg Number
    for(var stopData of data.down.data){
      const currStop = stopData.stationname;
      const currStopId = stopData.stationid;
      if(stopData.vehicleDetails.length > 0){
        stopCoveredAll = 1;
        for(var vehicleData of stopData.vehicleDetails){
          if(!vehicles[vehicleData.vehicleid]){
            vehicles[vehicleData.vehicleid] = {
              regno: vehicleData.vehiclenumber,
              lat: vehicleData.centerlat,
              long: vehicleData.centerlong,
              refresh: vehicleData.lastrefreshon,
              currentStop: currStop,
              lastStop: stopData.from,
              lastKnownStop: stop_names.includes(stopData.from) ? stopData.from : fallbackName,
              stopCovered: vehicleData.stopCoveredStatus,
              stopCoveredOriginal: vehicleData.stopCoveredStatus, // Save original as well for bad data
              routeno: `${stopData.routeno} ${suffix}`,
              direction: suffix,
              currentStopLocationId: vehicleData.currentlocationid
            };
          }
          if(vehicles[vehicleData.vehicleid].stopCovered === 1 || vehicles[vehicleData.vehicleid].stopCoveredOriginal === 0){
            stopCoveredAll = 0;
            if(stop_names.includes(vehicles[vehicleData.vehicleid].currentStop)){
              vehicles[vehicleData.vehicleid].lastKnownStop = vehicles[vehicleData.vehicleid].currentStop;
            }
            vehicles[vehicleData.vehicleid].lastStop = vehicles[vehicleData.vehicleid].currentStop;
            vehicles[vehicleData.vehicleid].currentStop = currStop;
            vehicles[vehicleData.vehicleid].stopCovered = vehicleData.stopCoveredStatus;
            if(vehicles[vehicleData.vehicleid].currentStopLocationId == currStopId) {
              vehicles[vehicleData.vehicleid].stopCoveredOriginal = 1;
            }
          }
        }
        if(stopCoveredAll === 1){
          break;
        }
      }
    }
    newData[`${name} ${suffix}`] = {pollDate: Date.now()} // Instantiate our direction obj
    for(var vehicle of Object.values(vehicles)){
      if(!newData[`${name} ${suffix}`][vehicle.lastKnownStop]){
        newData[`${name} ${suffix}`][vehicle.lastKnownStop] = [];
      }
      newData[`${name} ${suffix}`][vehicle.lastKnownStop].push(vehicle);
    }
  }
  // newData.pollDate = Date.now();
  return newData;
  // updateBusData(newData, setLiveBusData);
}
export const fetchBusData = (liveBusData, routename) => {
  if (liveBusData && liveBusData[routename]) { 
    if (liveBusData[routename].pollDate && (Date.now() - liveBusData[routename].pollDate) < 20000) { 
      console.warn("Live data poll request too frequent!");
      return Promise.resolve(); // Return a resolved promise with no data
    }
  } 

  return fetch(`${CORS_ANYWHERE}${BMTC_API_ENDPOINT}/SearchByRouteDetails_v4`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'lan': 'en',
      'deviceType': 'WEB',
    },
    body: JSON.stringify({
      routeid: PARENT_IDS[routename],
      servicetype: 0,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return constructBusData(data, routename); // Ensure the processed data is returned
    })
    .catch((error) => {
      console.error(error);
      console.error('Error fetching live bus data:', error);
      return {}; // Return an empty object in case of an error
    });
};

export const fetchLiveBusData = () => {
  // console.log("Fetching");
  return fetch(LIVE_SOURCE) // Return the promise chain
    .then(res => {
      // console.log("Received req");
      return res.json(); // Return parsed JSON
    })
    .then(data => {
      // console.log("Received json");
      return data; // Return the data to the caller
    })
    .catch(e => {
      console.error('Error fetching live bus data');
      console.error(e);
      return {}; // Return an empty object in case of an error
    });
};

export const updateLiveInfo = (mapRef, liveBusData, setLiveBusData, filter) => {
  let dataP;
  if (USE_LIVE_SOURCE && USE_LIVE_SOURCE.toUpperCase() === "TRUE") {
    dataP = fetchLiveBusData();
  } else {
    if (filter && !isUndefined(filter)) {
      dataP = fetchBusData(liveBusData, filter);
    }
  }

  if (!dataP) {
    console.log('No data promise available');
    clearLiveBusMarkerLayer(mapRef);
    return;
  }

  dataP.then((dataE) => {
    if (isUndefined(dataE)) {
      console.log('Data is undefined:', dataE);
      clearLiveBusMarkerLayer(mapRef);
      return;
    }
    // console.log('Received data:', dataE);
    setLiveBusMarkerLayer(mapRef, getVehiclesGeoJson(dataE, filter).data);
    setLiveBusData(dataE);
  }).catch((error) => {
    console.error('Error processing data:', error);
    clearLiveBusMarkerLayer(mapRef);
  });
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