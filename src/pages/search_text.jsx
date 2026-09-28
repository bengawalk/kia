import React, { useEffect, useMemo, useRef, useState } from "react";
import { debounce as lDebounce } from "lodash";

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
const SEARCH_DEBOUNCE_MS = 1000;

const newSessionToken = () =>
  window.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);

const fetchJson = async (path, params) => {
  const response = await fetch(`${path}?${new URLSearchParams(params)}`);
  if (!response.ok) {
    throw new Error(`${path} failed: ${response.status}`);
  }
  return response.json();
};

const SearchText = ({
  selectedTab,
  setCurrentScreen,
  setInputLocation,
  t,
  bodyHeight,
}) => {
  const [recentLocations, setRecentLocations] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  // Groups the autocomplete requests and the place details request of one search for Google billing
  const sessionToken = useRef(newSessionToken());
  // Used to ignore responses for text that has since changed
  const latestInput = useRef("");

  const fetchSuggestions = useMemo(
    () =>
      lDebounce(async (input) => {
        try {
          const data = await fetchJson("/api/autocomplete", {
            input,
            session: sessionToken.current,
          });
          if (latestInput.current === input) {
            setSuggestions(data.suggestions);
          }
        } catch (e) {
          console.log(e);
          if (latestInput.current === input) {
            setSuggestions([]);
          }
        } finally {
          if (latestInput.current === input) {
            setLoading(false);
          }
        }
      }, SEARCH_DEBOUNCE_MS),
    [],
  );

  useEffect(() => () => fetchSuggestions.cancel(), [fetchSuggestions]);

  const clearSuggestions = () => {
    fetchSuggestions.cancel();
    setSuggestions([]);
    setLoading(false);
  };

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

  useEffect(() => {
    const input = value.trim();
    latestInput.current = input;
    if (input.length < 2) {
      // Prevents showing the loader if the search text is empty
      clearSuggestions();
      return;
    }
    setLoading(true);
    fetchSuggestions(input);
  }, [value]);

  const onPlaceSelect = async (placeId) => {
    try {
      const { name, lat, lng } = await fetchJson("/api/place", {
        id: placeId,
        session: sessionToken.current,
      });
      // The session ends with a place details call. Start a new one for any further searches
      sessionToken.current = newSessionToken();
      saveLocationMetadata(placeId, name, [lat, lng]);
      setInputLocation({ lat, lng });
      setCurrentScreen(APP_SCREENS.LOCATION_MAP);
    } catch (e) {
      console.log(e);
    }
  };

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
        {loading && (
          <div id="search-loading">
            <div className="spin" />
            <Trans t={t} i18nKey="Loading" />
            ...
          </div>
        )}
        {!loading &&
          suggestions.map((item) => (
            <div
              className="search-result-item"
              key={item.placeId}
              onClick={() => onPlaceSelect(item.placeId)}
            >
              <p className="search-result-main-text">{item.mainText}</p>
              <p className="search-result-secondary-text">
                {item.secondaryText}
              </p>
            </div>
          ))}
        {!loading && value && suggestions.length < 1 && (
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
