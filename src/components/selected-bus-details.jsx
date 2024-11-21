import React, { useEffect, useState } from "react";
import { Trans, withTranslation } from "react-i18next";
import ALL_BUSES_STOPS from "../utils/stops.json";
import PARENT_IDS from "../utils/bmtc_api_data.json"
import _ from "lodash";
import IconBusSide from "../assets/icon-bus-side-blue.svg";
import {
  BMTC_API_ENDPOINT,
  CORS_ANYWHERE,
  MAP_STYLE_INTERMEDIATE_STOP,
  MAP_STYLE_ROUTE,
  STOPS_DATA,
} from "../utils/constants";
import BusDetailsStop from "./bus-details-stop";
import IconArrowBack from "../assets/icon-arrow-back";
import iconRefresh from "../assets/icon-refresh.svg";
import { ALL_BUSES_TIMINGS, getIntermediateStopsGeoJson, getVehiclesGeoJson } from "../utils";
import mapboxgl from "mapbox-gl";

const SelectedBusDetails = ({
  setSelectedBus,
  selectedBus,
  setSelectedStop,
  currentTime,
  selectedTabData,
  toAirport,
  t,
  mapRef,
  liveBusData,
  setLiveBusData
}) => {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const updateBusData = (newData) => {
    // const currentRef = mapRef.current;
    // if(currentRef){
    //   currentRef.getSource("vehicles").setData(getVehiclesGeoJson(newData, toAirport).data);
    // }
    setLiveBusData(newData);

  } 
  const constructBusData = async (data) => {
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
      newData[`${name} ${suffix}`] = {} // Instantiate our direction obj
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
      newData[`${name} ${suffix}`] = {} // Instantiate our direction obj
      for(var vehicle of Object.values(vehicles)){
        if(!newData[`${name} ${suffix}`][vehicle.lastKnownStop]){
          newData[`${name} ${suffix}`][vehicle.lastKnownStop] = [];
        }
        newData[`${name} ${suffix}`][vehicle.lastKnownStop].push(vehicle);
      }
    }
    newData.pollDate = Date.now();
    updateBusData(newData);
  }
  const fetchBusData = async () => {
    if(liveBusData){ // We dont want to poll too frequently
      if(liveBusData.pollDate && (liveBusData.pollDate - Date.now()) < 20000){ // 20 second timer
        console.warn("Live data poll request too frequent!");
        return;
      }
    }

    try {
      // This will be in backend if we get backend up and running
      const response = await fetch(`${CORS_ANYWHERE}${BMTC_API_ENDPOINT}/SearchByRouteDetails_v4`, { // cors bypass, make sure cors bypass is in index.html as well under default-src
        method: 'POST', // Specify the HTTP method as POST
        headers: {
          'Content-Type': 'application/json', // Set the headers required
          'lan': 'en',
          'deviceType': 'WEB',
        },
        body: JSON.stringify({
          routeid: PARENT_IDS[routename], // Get parent id from selected bus details
          servicetype: 0,
        }), // Convert the JavaScript object to a JSON string
      });
      const data = await response.json();
      constructBusData(data);
    } catch (error) {
      console.error('Error fetching bus data:', error);
    }
  };

  useEffect(() => {
    const currentRef = mapRef.current;
    if(!currentRef) {
      return;
    }

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    const showPopup = (e) => {
      currentRef.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.name;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current);
    };

    const onStopClick = (e) => {
      const feature = e.features[0];

      const { name } = feature.properties;
      setSelectedStop(name);
    };

    const hidePopup = () => {
      currentRef.getCanvas().style.cursor = "";
      popup.remove();
    };

    const callFnIfMapLoaded = (fn) => {
      if (mapRef.current._loaded) {
        fn();
      } else {
        mapRef.current.on("load", fn);
      }
    };

    const addLayerAndEvents = () => {
      currentRef.addSource(uniqueName, getIntermediateStopsGeoJson(stops));
      currentRef.addLayer({
        id: uniqueName,
        source: uniqueName,
        ...MAP_STYLE_INTERMEDIATE_STOP,
      });

      // Show bus stop name on hovering on the circle
      currentRef.on("mouseenter", uniqueName, showPopup);
      mapRef.current.on("click", uniqueName, onStopClick);
      currentRef.on("mouseleave", uniqueName, hidePopup);
    };

    callFnIfMapLoaded(addLayerAndEvents);

    const intervalId = setInterval(fetchBusData, 30000); // Set interval for every 30 seconds

    return () => {
      // Cleanup interval on component unmount
      clearInterval(intervalId);
      // Cleanup live data on component unmount
      // We wont do this when we use back-end and have site-wide live data (as opposed to route-wide rn)
      setLiveBusData(null);
      if (!currentRef) {
        return;
      }
      currentRef.off("mouseenter", uniqueName, showPopup);
      currentRef.off("click", uniqueName, onStopClick);
      currentRef.off("mouseleave", uniqueName, hidePopup);

      // TODO: Figure out a better way for if check
      // When user opens details of a bus and clicks on search box, the map component is unmounted, and _canvas property is undefined.
      // In such cases getLayer and removeLayer throw error.
      // But when user opens details of a bus and clicks back to all buses, the layer needs to be removed.
      if (currentRef._canvas) {
        hidePopup();
        if (currentRef.getLayer(uniqueName)) {
          currentRef.removeLayer(uniqueName);
        }
        if (currentRef.getSource(uniqueName)) {
          currentRef?.removeSource(uniqueName);
        }
      }
    };
  }, [mapRef.current]);

  useEffect(() => {
    if(!_.find(selectedTabData, { name: selectedBus })) {
      setSelectedBus(null);
    }
  }, [selectedTabData, selectedBus]);

  const busDetails = _.find(selectedTabData, { name: selectedBus });
  if(!busDetails) {
    return null;
  }

  const { name, start, end, routename } = busDetails;
  const timingsData = ALL_BUSES_TIMINGS[routename];
  const { stops, totalDistance } = ALL_BUSES_STOPS[routename];

  const fromText = toAirport ? start.name : STOPS_DATA.airport.name;
  const toText = toAirport ? STOPS_DATA.airport.name : end.name;
  const direction = toAirport ? "up" : "down";
  const uniqueName = `${selectedBus}_${direction}_intermediate_stops`;
  const liveBusData_ = liveBusData ? liveBusData : {};
  if(!liveBusData || !liveBusData[routename] || !liveBusData_[routename]){
    liveBusData_[routename] = {};
    fetchBusData();
  }
  if(liveBusData){ // Update on every reload as toAirport might have changed
    const currentRef = mapRef.current;
    if(currentRef){
      currentRef.getSource("vehicles").setData(getVehiclesGeoJson(liveBusData, routename).data);
    }
  }



  return (
    <>
      <button className="sel-bus-back" onClick={() => setSelectedBus(null)}>
        <IconArrowBack fill={"#666666"} />
        Back to all buses
      </button>

      <div className="sel-bus-title">
        <img src={IconBusSide} alt="" />
        <span className="sel-but-title-name">{name}</span>

      </div>

      <div className="sel-bus-from-to">
        <span className="text-light">
          <Trans t={t} i18nKey="from" />
        </span>{" "}
        <Trans t={t} i18nKey={fromText} />
        <br />
        <span className="text-light">
          <Trans t={t} i18nKey="to" />
        </span>{" "}
        <Trans t={t} i18nKey={toText} />
      </div>

      <h3 className="mb-2 sel-bus-stops-heading">
        <Trans t={t} i18nKey="Stops & buses on route " />
        {liveBusData && 
              <img
              src={iconRefresh}
              alt=""
              className={`sel-bus-stop-chevron `}
              onClick={fetchBusData}
              
            />}
      </h3>
      <div id="sel-bus-stops-list-container">
        <BusDetailsStop
          key={fromText}
          stopDetails={{
            distance: 0,
            loc: start.loc,
            name: fromText,
            name_kn: fromText,
          }}
          setSelectedStop={setSelectedStop}
          totalDistance={totalDistance}
          timingsData={timingsData}
          currentTime={currentTime}
          selectedTimeIndex={selectedTimeIndex}
          setSelectedTimeIndex={setSelectedTimeIndex}
          busData={liveBusData_[routename][fromText]}
          mapRef={mapRef}
          refresh={fetchBusData}
        />
        {stops.map((s) => (
          <BusDetailsStop
            key={s.name}
            stopDetails={s}
            setSelectedStop={setSelectedStop}
            totalDistance={totalDistance}
            timingsData={timingsData}
            currentTime={currentTime}
            selectedTimeIndex={selectedTimeIndex}
            setSelectedTimeIndex={setSelectedTimeIndex}
            busData={liveBusData_[routename][s.name]}
            mapRef={mapRef}
            refresh={fetchBusData}
          />
        ))}
        <BusDetailsStop
          key={toText}
          stopDetails={{
            distance: totalDistance,
            loc: end.loc,
            name: toText,
            name_kn: toText,
          }}
          setSelectedStop={setSelectedStop}
          totalDistance={totalDistance}
          timingsData={timingsData}
          currentTime={currentTime}
          selectedTimeIndex={selectedTimeIndex}
          setSelectedTimeIndex={setSelectedTimeIndex}
          busData={liveBusData_[routename][toText]}
          mapRef={mapRef}
          refresh={fetchBusData}
        />
      </div>
    </>
  );
};

export default withTranslation()(SelectedBusDetails);
