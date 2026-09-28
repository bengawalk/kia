import _ from "lodash";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import * as maplibregl from "maplibre-gl";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Map from "../components/map";

import MapLocationInput from "../components/map-location-input";
import SideMenu from "../components/side-menu";
import Sidebar from "../components/sidebar";
import { getSuggestedBus } from "../utils";
import { BUS_DATA } from "../utils/constants";

import { Trans, withTranslation } from "react-i18next";
import { STOPS_DATA } from "../utils/constants";

maplibregl.setWorkerUrl(maplibreWorkerUrl);

// Taken from the OSM liberty style: https://github.com/maputnik/osm-liberty/blob/gh-pages/style.json
// @ts-ignore

function isWebglSupported() {
  if (window.WebGL2RenderingContext) {
    const canvas = document.createElement("canvas");
    try {
      const context = canvas.getContext("webgl2");
      if (context && typeof context.getParameter == "function") {
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
  selectedTab,
  setSelectedTab,
  userLocation,
  inputLocation,
  setCurrentScreen,
  inputLocationMetadata,
  setLang,
  bodyHeight,
  t,
}) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedStop, setSelectedStop] = useState(null);
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(null);
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;

  const suggestedBus = getSuggestedBus(selectedTabData, inputLocation);
  const suggestedBusDetails = _.find(selectedTabData, { name: suggestedBus });
  const webglSupported = isWebglSupported();

  useEffect(() => {
    if (!webglSupported || !mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [STOPS_DATA.majestic.loc[1], STOPS_DATA.majestic.loc[0]],
      zoom: 11,
      minZoom: 10,
      maxZoom: 18,
      canvasContextAttributes: { preserveDrawingBuffer: true }, // Optimize for static maps
      zoomLevelsToOverscale: undefined,
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
          mapContainerRef={mapContainerRef}
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
        setCurrentScreen={setCurrentScreen}
        inputLocation={inputLocation}
        inputLocationMetadata={inputLocationMetadata}
      />
      <SideMenu setLang={setLang} />
    </>
  );
};

export default withTranslation()(InitialScreen);
