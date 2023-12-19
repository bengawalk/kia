import * as React from "react";
import Map from "../components/map";
import _ from "lodash";
import { useEffect, useState } from "react";

import { BUS_DATA } from "../utils/constants";
import Sidebar from "../components/sidebar";
import MapLocationInput from "../components/map-location-input";
import { getSuggestedBus } from "../utils";
import SideMenu from "../components/side-menu";

const InitialScreen = ({
  googleScriptStatus,
  loadGoogleMapsScript,
  selectedTab,
  setSelectedTab,
  userLocation,
  inputLocation,
  setCurrentScreen,
  inputLocationMetadata,
  setLang,
  bodyHeight,
}) => {
  const [selectedBus, setSelectedBus] = useState(null);
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;

  const suggestedBus = getSuggestedBus(selectedTabData, inputLocation);
  const suggestedBusDetails = _.find(selectedTabData, { name: suggestedBus });

  useEffect(() => {
    if (suggestedBus) {
      setSelectedBus(suggestedBus);
    }
  }, [suggestedBus, inputLocation]);

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
        googleScriptStatus={googleScriptStatus}
        loadGoogleMapsScript={loadGoogleMapsScript}
        setCurrentScreen={setCurrentScreen}
        inputLocation={inputLocation}
        inputLocationMetadata={inputLocationMetadata}
      />
      <SideMenu setLang={setLang} />
    </>
  );
};

export default InitialScreen;
