import * as React from "react";
import maplibregl from "maplibre-gl";
import Map from "../components/map";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

import { BUS_DATA } from "../utils/constants";
import Sidebar from "../components/sidebar";
import MapLocationInput from "../components/map-location-input";
import { getSuggestedBus } from "../utils";
import SideMenu from "../components/side-menu";

import { STOPS_DATA } from "../utils/constants";

function isWebglSupported() {
  if (window.WebGLRenderingContext) {
    const canvas = document.createElement('canvas');
    try {
      const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (context && typeof context.getParameter == 'function') {
        return true;
      }
    } catch (e) {
      // WebGL is supported, but disabled
    }
    return false;
  }
  // WebGL not supported
  return false;
}

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
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedStop, setSelectedStop] = useState(null);
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(null);
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;

  const suggestedBus = getSuggestedBus(selectedTabData, inputLocation);
  const suggestedBusDetails = _.find(selectedTabData, { name: suggestedBus });
  const webglSupported = isWebglSupported();

  useEffect(() => {
    if (!webglSupported) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [STOPS_DATA.majestic.loc[1], STOPS_DATA.majestic.loc[0]],
      zoom: 11,
      minZoom: 10,
      maxZoom: 18,
      preserveDrawingBuffer: true, // Optimize for static maps
    });

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    mapRef.current = map;

    // Cleanup function
    return () => {
      if (map && mapContainerRef.current) {
        try {
          map.remove();
        } catch (error) {
          console.warn("Error removing map:", error);
        }
        mapRef.current = null;
      }
    };
  }, [webglSupported]); // Only re-run if WebGL support changes

  useEffect(() => {
    if (suggestedBus) {
      setHighlightedSuggestion(suggestedBus);
    }
  }, [suggestedBus, inputLocation]);

  return (
    <>
      <Sidebar
        mapRef={mapRef}
        suggestedBusDetails={suggestedBusDetails}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        highlightedSuggestion={highlightedSuggestion}
        selectedBus={selectedBus}
        setSelectedBus={setSelectedBus}
        selectedStop={selectedStop}
        setSelectedStop={setSelectedStop}
        suggestedBus={suggestedBus}
        sortedTabData={selectedTabData}
        bodyHeight={bodyHeight}
      />
      {webglSupported ? (
        <div id="map" ref={mapContainerRef} className="map-container" />
      ) : (
        <div className="center padding" id="error-page">
          <Trans t={t} i18nKey="deviceMapSupport" />
          <br />
          <Trans t={t} i18nKey="ensureUpToDate" />
        </div>
      )}
      {mapRef.current && (
        <Map
          mapRef={mapRef}
          inputLocation={inputLocation}
          busData={selectedTabData}
          userLocation={userLocation}
          selectedBus={selectedBus}
          setSelectedBus={setSelectedBus}
          selectedStop={selectedStop}
          setSelectedStop={setSelectedStop}
          selectedTab={selectedTab}
        />
      )}
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
