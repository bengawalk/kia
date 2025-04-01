import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import { APP_SCREENS, STOPS_DATA } from "../utils/constants";

import IconMarker from "../assets/icon-marker.svg";
import IconBack from "../assets/icon-back.svg";
import { Trans, withTranslation } from "react-i18next";

const SearchMap = ({
  selectedTab,
  inputLocation,
  setCurrentScreen,
  setInputLocation,
  t,
  bodyHeight,
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(16);

  // Location currently at the center of the map
  const [tempLocation, setTempLocation] = useState(
    inputLocation || {
      lat: STOPS_DATA.majestic.loc[0],
      lng: STOPS_DATA.majestic.loc[1],
    },
  );

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [tempLocation.lng, tempLocation.lat],
      zoom: zoom,
    });

    // Cleanup function
    return () => {
      if (map.current && mapContainer.current) {
        try {
          map.current.remove();
        } catch (error) {
          console.warn("Error removing map:", error);
        }
        map.current = null;
      }
    };
  }, []); // Empty dependency array since we only want to initialize once

  const onConfirm = () => {
    const { lat, lng } = map.current.getCenter();
    setInputLocation({ lat, lng });
    setCurrentScreen(APP_SCREENS.INITIAL);
  };

  return (
    <div id="search-page" style={{ height: `${bodyHeight}px` }}>
      <div id="search-heading">
        <button
          id="search-back"
          onClick={() => setCurrentScreen(APP_SCREENS.LOCATION_TEXT)}
        >
          <img src={IconBack} alt="Back" />
        </button>
        <h3 id="search-heading-text">
          <Trans
            t={t}
            i18nKey={
              selectedTab === "ta"
                ? "Adjust start location"
                : "Adjust destination location"
            }
          />
        </h3>
      </div>
      <div id="search-map" ref={mapContainer}>
        <div id="search-marker">
          <img src={IconMarker} alt="" />
        </div>
      </div>
      <button id="search-confirm-button" onClick={onConfirm}>
        <Trans t={t} i18nKey="Confirm" />
      </button>
    </div>
  );
};

export default withTranslation()(SearchMap);
