import * as React from "react";
import Map from "../components/map";
import _ from "lodash";
import { useState } from "react";

import { BUS_DATA, LOCATION_STATES, TABS } from "../utils/constants";
import Sidebar from "../components/sidebar";
import MapLocationInput from "../components/map-location-input";
import { getSuggestedBus } from "../utils";

const InitialScreen = ({
  selectedTab,
  setSelectedTab,
  userLocation,
  inputLocation,
  setCurrentScreen,
  inputLocationMetadata,
  lang,
  setLang,
  bodyHeight,
}) => {
  const [selectedBus, setSelectedBus] = useState(null);
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;

  const suggestedBus = getSuggestedBus(selectedTabData, inputLocation);
  const suggestedBusDetails = _.find(selectedTabData, { name: suggestedBus });

  return (
    <>
      <Sidebar
        suggestedBusDetails={suggestedBusDetails}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        selectedBus={selectedBus}
        setSelectedBus={setSelectedBus}
        suggestedBus={suggestedBus}
        sortedTabData={selectedTabData}
        lang={lang}
        setLang={setLang}
        bodyHeight={bodyHeight}
      />
      <Map
        inputLocation={inputLocation}
        busData={selectedTabData}
        userLocation={userLocation}
        selectedBus={selectedBus}
        setSelectedBus={setSelectedBus}
        selectedTab={selectedTab}
      />
      <MapLocationInput
        setCurrentScreen={setCurrentScreen}
        inputLocation={inputLocation}
        inputLocationMetadata={inputLocationMetadata}
      />
    </>
  );
};

export default InitialScreen;
