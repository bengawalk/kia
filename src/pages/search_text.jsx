import React, { useEffect, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { Trans, withTranslation } from "react-i18next";
import {
  reverse as lReverse,
  sortBy as lSortBy,
  takeRight as lTakeRight,
} from "lodash";

import IconBack from "../assets/icon-back.svg";
import IconCross from "../assets/icon-cross.svg";
import IconGreyPin from "../assets/icon-grey-pin.svg";
import LogoGoogle from "../assets/logo-google.svg";

import { APP_SCREENS, GOOGLE_API_KEY, STOPS_DATA } from "../utils/constants";
import { saveLocationMetadata } from "../utils";

const RECENT_LOCATION_COUNT = 5;

const SearchText = ({
  selectedTab,
  setCurrentScreen,
  setInputLocation,
  t,
  bodyHeight,
}) => {
  const [input, setInput] = useState("");
  const [recentLocations, setRecentLocations] = useState([]);

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: GOOGLE_API_KEY,
    debounce: 1000,
    options: {
      location: new window.google.maps.LatLng(...STOPS_DATA.majestic.loc),
      radius: 60000,
      componentRestrictions: {
        country: "in",
      },
    },
  });

  useEffect(() => {
    const locations = lTakeRight(
      lSortBy(
        JSON.parse(localStorage.getItem("locations") || "[]"),
        (l) => l.time || 0,
      ),
      RECENT_LOCATION_COUNT,
    );
    lReverse(locations); // Reverse mutates the array
    setRecentLocations(locations);
  }, []);

  useEffect(() => {
    // TODO: Memoize for input text. Reduced network requests on input change
    //  even for accidental typing and slow type that doesn't take advantage of
    //  debounce functionality
    getPlacePredictions({ input });
  }, [input]);

  const onPlaceSelect = (placeId) => {
    placesService?.getDetails(
      {
        placeId,
      },
      (placeDetails) => {
        const {
          geometry: {
            location: { lat, lng },
          },
          name,
          place_id: placeId,
        } = placeDetails;
        saveLocationMetadata(placeId, name, [lat(), lng()]);
        setInputLocation({
          lat: lat(),
          lng: lng(),
        });
        setCurrentScreen(APP_SCREENS.LOCATION_MAP);
      },
    );
  };

  return (
    <div id="search-page" style={{ height: `${bodyHeight}px` }}>
      <div id="search-heading">
        <button
          id="search-back"
          onClick={() => setCurrentScreen(APP_SCREENS.INITIAL)}
        >
          <img src={IconBack} alt="Back" />
        </button>
        <h3 id="search-heading-text">
          <Trans
            t={t}
            i18nKey={
              selectedTab === "ta"
                ? "Enter starting point"
                : "Enter destination"
            }
          />
        </h3>
      </div>
      <div id="search-input-wrapper">
        <input
          id="search-input"
          placeholder={`${t("Search")}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        {input.length > 0 && (
          <button id="search-clear" onClick={() => setInput("")}>
            <img src={IconCross} alt="Cancel" />
          </button>
        )}
      </div>
      <div id="search-results">
        {!input && recentLocations.length > 0 && (
          <div>
            <h4 className="mb-2 plr mt-2">
              <Trans t={t} i18nKey="Recent locations" />
            </h4>
            {recentLocations.map((r) => (
              <div
                key={r.placeId}
                className="search-result-item"
                onClick={() => {
                  setInputLocation({
                    lat: r.location[0],
                    lng: r.location[1],
                  });
                  setCurrentScreen(APP_SCREENS.INITIAL);
                }}
              >
                <p className="search-result-main-text">{r.name}</p>
              </div>
            ))}
          </div>
        )}
        {isPlacePredictionsLoading && (
          <div id="search-loading">
            <div className="spin" />
            <Trans t={t} i18nKey="Loading" />
            ...
          </div>
        )}
        {!isPlacePredictionsLoading &&
          placePredictions.map((item) => (
            <div
              className="search-result-item"
              key={item.place_id}
              onClick={() => onPlaceSelect(item.place_id)}
            >
              <p className="search-result-main-text">
                {item.structured_formatting.main_text}
              </p>
              <p className="search-result-secondary-text">
                {item.structured_formatting.secondary_text}
              </p>
            </div>
          ))}
        {!isPlacePredictionsLoading && input && placePredictions.length < 1 && (
          <div>
            <Trans t={t} i18nKey="No results found" />
          </div>
        )}
      </div>

      <div id="search-powered-by">
        Powered by&nbsp;
        <img src={LogoGoogle} alt="Google" />
      </div>
      <div id="search-footer">
        <button
          className="search-footer-item"
          onClick={() => setCurrentScreen(APP_SCREENS.LOCATION_MAP)}
        >
          <img src={IconGreyPin} alt="" />
          <Trans t={t} i18nKey="Locate on map" />
        </button>
      </div>
    </div>
  );
};

export default withTranslation()(SearchText);
