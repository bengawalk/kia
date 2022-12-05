import * as React from "react";
import { createRoot } from "react-dom/client";
import Map from "./map";
import _ from "lodash";
import {useEffect, useState} from "react";
import getDistance from 'geolib/es/getDistance';

import {BUS_DATA} from "./contants";

import BusItem from "./bus-item";

const TABS = [
  {
    text: "To airport",
    id: "ta"
  },
  {
    text: "From airport",
    id: "fa",
  },
];

const LOCATION_STATES = {
  PENDING: "Waiting for location...",
  UNAVAILABLE: "Location unavailable",
  DENIED: "Location permission denied",
  APPROVED: "Update location",
}

const getCurrentMsm = () => Math.floor((new Date() - (new Date()).setHours(0, 0, 0, 0))/60000);

const sortBuses = (busesList, location) => {
  if(!location) {
    return busesList;
  }
  return _.sortBy(busesList, b => getDistance(
    { latitude: location.lat, longitude: location.lng },
    { latitude: b.start.loc[0], longitude: b.start.loc[1] }
  ));
}

const Container = () => {
  const [pointerDownPoint, setPointerDownPoint] = useState(null);
  const [pointerMoveValue, setPointerMoveValue] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationState, setLocationState] = useState(LOCATION_STATES.PENDING);
  const [selectedTab, setSelectedTab] = useState(TABS[0].id);
  const [selectedBus, setSelectedBus] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentMsm());
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;
  const sortedTabData = sortBuses(selectedTabData, location);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      setCurrentTime(getCurrentMsm());
    }, 10000);
    return () => {
      clearInterval(secondInterval);
    }
  }, [setCurrentTime]);

  useEffect(() => {
    if(!location) {
      return;
    }
    const { lat, lng } = location;
    const distanceToAirport = getDistance(
      { latitude: lat, longitude: lng },
      { latitude: 13.199001, longitude: 77.708176 }
    );
    // If you're within 1km of the KIA bus stand, select the from airport tab
    if(
      distanceToAirport < 1000
    ) {
      setSelectedTab(TABS[1].id);
    }
  }, [location]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      setLocationState(LOCATION_STATES.APPROVED);
    },
    (error) => {
      if(error.code === 1) {
        setLocationState(LOCATION_STATES.DENIED);
      }
      else {
        console.log(error);
      }
    });
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      getUserLocation();
    } else {
      setLocationState(LOCATION_STATES.UNAVAILABLE);
    }
  }, []);

  const onPointerDown = (e) => {
    if(window.innerWidth > 999) {
      return;
    }
    setPointerDownPoint({
      x: e.screenX,
      y: e.screenY,
    });
  }

  const onPointerMove = (e) => {
    if(!pointerDownPoint) {
      return;
    }
    const { screenY } = e;
    setPointerMoveValue(screenY - pointerDownPoint.y);
    if(sidebarOpen) {
      setPointerMoveValue(-window.innerHeight + 90 + screenY - pointerDownPoint.y);
    } else {
      setPointerMoveValue(screenY - pointerDownPoint.y);
    }
  }

  const onPointerUp = () => {
    if(!pointerDownPoint) {
      return;
    }
    setPointerDownPoint(null);
    if(sidebarOpen) {
      if(pointerMoveValue > -window.innerHeight + 90 + 100) {
        setSidebarOpen(false);
        setPointerMoveValue(0);
      } else {
        setPointerMoveValue(-window.innerHeight + 90);
      }
    } else {
      if(pointerMoveValue < -100) {
        // Touch moved up by a significant value
        setPointerMoveValue(-window.innerHeight + 90);
        setSidebarOpen(true);
      } else {
        // Touch moved up but not significant
        setPointerMoveValue(0);
      }
    }
  }

  return (
    <div id="app-container"
         onPointerUp={(e) => {
           // console.log("Pointer up");
           onPointerUp(e);
         }}
         // onPointerLeave={(e) => {
         //   console.log(e);
         //   onPointerUp(e);
         // }}
         onPointerMove={(e) => {
           // console.log("Pointer move");
           onPointerMove(e);
         }}
    >
      <div
        id="sidebar"
        onPointerDown={onPointerDown}
        style={{
          marginTop: `${pointerMoveValue}px`
        }}
      >
        <div className="padding" id="sidebar-header">
          <div id="logo-banner" className="mb-1">
            <img src="/bmtc_logo.svg" alt="BMTC logo" id="bmtc-logo" />
            BMTC VAYU VAJRA
          </div>
          <h1 className="mb-4">Bengaluru Airport Bus</h1>
          <div className="tabs">
            {
              TABS.map(t => (
                <div key={t.id} className={`tab-item ${selectedTab === t.id ? "selected" : ""}`} onClick={() => setSelectedTab(t.id)}>
                  {
                    t.text
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div id="sidebar-content">
          <h2 id="sidebar-routes-heading">Routes and Schedules</h2>
          <div id="sidebar-bus-list">
            {
              sortedTabData.map(bus => (
                <BusItem
                  key={bus.name}
                  busDetails={bus}
                  selectedBus={selectedBus}
                  setSelectedBus={setSelectedBus}
                  toAirport={selectedTab === "ta"}
                  currentTime={currentTime}
                />
              ))
            }
          </div>
        </div>
        <div className="padding link text">
          { locationState }
        </div>
      </div>
      <Map
        busData={sortedTabData}
        location={location}
        selectedBus={selectedBus}
        selectedTab={selectedTab}
      />
    </div>
  )
}

const root = createRoot(
  document.getElementById('root')
);
root.render(<Container />);