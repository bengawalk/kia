import React, { useEffect, useState } from "react";
import usePlacesAutocomplete, { getDetails as getPlaceDetails } from "use-places-autocomplete";
import { debounce as lDebounce } from "lodash"

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

import { APP_SCREENS } from "../utils/constants";
import { saveLocationMetadata } from "../utils";
import appStorage from "../utils/storage";

const RECENT_LOCATION_COUNT = 5;

const SearchText = ({
  selectedTab,
  setCurrentScreen,
  setInputLocation,
  t,
  bodyHeight,
}) => {
  const [recentLocations, setRecentLocations] = useState([]);
  const [showDebounceLoading, setShowDebounceLoading] = useState(false);

  const { suggestions = {}, value = "", setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      locationBias: new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(12.789201188889859, 77.39869888194104), // South west point. Somewhere near Bidadi
        new window.google.maps.LatLng(13.230422232290332, 77.78540557324757) // North east point. Above hoskote and airport
      ),
      componentRestrictions: {
        country: "in",
      },
    },
    debounce: 1000,
  });

  useEffect(() => {
    const locations = lTakeRight(
      lSortBy(
        JSON.parse(appStorage.getItem("locations") || "[]"),
        (l) => l.time || 0,
      ),
      RECENT_LOCATION_COUNT,
    );
    lReverse(locations); // Reverse mutates the array
    setRecentLocations(locations);
  }, []);

  const hideDebounceLoading = () => {
    setShowDebounceLoading(false);
  };
  const debouncedHideLoading = lDebounce(hideDebounceLoading, 1000);

  useEffect(() => {
    if(value) {
      // Prevents showing the loader if the search text is empty
      setShowDebounceLoading(true);
      debouncedHideLoading();
    }
  }, [value]);

  const onPlaceSelect = async (placeId) => {
    const {
      geometry: {
        location: { lat, lng },
      },
      name,
    } = await getPlaceDetails({ placeId });
    saveLocationMetadata(placeId, name, [lat(), lng()]);
    setInputLocation({
      lat: lat(),
      lng: lng(),
    });
    setCurrentScreen(APP_SCREENS.LOCATION_MAP);
  };

  const showLoading = showDebounceLoading || suggestions.loading

  return (
    <div id="search-page" style={{ height: `${bodyHeight}px` }}>
      <div id="search-heading">
        <button
          id="search-back"
          onClick={() => {
            clearSuggestions();
            setCurrentScreen(APP_SCREENS.INITIAL);
          }}
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        {(value || "").length > 0 && (
          <button id="search-clear" onClick={() => setValue("")}>
            <img src={IconCross} alt="Cancel" />
          </button>
        )}
      </div>
      <div id="search-results">
        {!value && recentLocations.length > 0 && (
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
        {showLoading && (
          <div id="search-loading">
            <div className="spin" />
            <Trans t={t} i18nKey="Loading" />
            ...
          </div>
        )}
        {!showLoading &&
          suggestions.data.map((item) => (
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
        {!showLoading && value && suggestions.data.length < 1 && (
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
