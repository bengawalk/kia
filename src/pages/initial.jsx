import * as React from "react";
import Map from "../components/map";
import _ from "lodash";
import {useEffect, useState} from "react";
import getDistance from 'geolib/es/getDistance';

import {BUS_DATA, LOCATION_STATES, TABS} from "../utils/constants";
import Sidebar from "../components/sidebar";
import MapLocationInput from "../components/map-location-input";

const sortBuses = (busesList, location) => {
  if(!location) {
    return busesList;
  }
  return _.sortBy(busesList, b => getDistance(
    { latitude: location.lat, longitude: location.lng },
    { latitude: b.start.loc[0], longitude: b.start.loc[1] }
  ));
}

const InitialScreen = ({
  inputLocation,
  userLocationState,
  setCurrentScreen,
}) => {
  const [selectedTab, setSelectedTab] = useState(TABS[0].id);
  const [selectedBus, setSelectedBus] = useState(null);
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;
  const sortedTabData = sortBuses(selectedTabData, inputLocation);

  useEffect(() => {
    if(!inputLocation) {
      return;
    }
    const { lat, lng } = inputLocation;
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
  }, [inputLocation]);

  return (
    <>
      <Sidebar
        selectedTab={selectedTab} setSelectedTab={setSelectedTab}
        selectedBus={selectedBus} setSelectedBus={setSelectedBus}
        sortedTabData={sortedTabData}
        locationState={userLocationState}
      />
      <Map
        busData={sortedTabData}
        location={location}
        selectedBus={selectedBus}
        setSelectedBus={setSelectedBus}
        selectedTab={selectedTab}
      />
      <MapLocationInput setCurrentScreen={setCurrentScreen} inputLocation={inputLocation} />
    </>
  )
}

export default InitialScreen;
