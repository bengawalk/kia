import * as React from "react";
import { sortBy as lSortBy, map as lMap } from "lodash";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import getDistance from "geolib/es/getDistance";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import i18n from "i18next";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import InitialScreen from "./pages/initial";
import {
  APP_SCREENS,
  LANGUAGES,
  LOCATION_STATES,
  STOPS_DATA,
  TABS,
} from "./utils/constants";
import SearchText from "./pages/search_text";
import SearchMap from "./pages/search_map";
import { saveLocationMedata } from "./utils";
import "./utils/i18n";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.5,
});

const Container = () => {
  const [currentScreen, setCurrentScreen] = useState(APP_SCREENS.INITIAL);
  const [bodyHeight, setBodyHeight] = useState(null);
  const [selectedTab, setSelectedTab] = useState(TABS[0].id);
  const [inputLocation, setInputLocation] = useState(null);
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || LANGUAGES[0].code,
  );
  const [inputLocationMetadata, setInputLocationMetadata] = useState({
    name: "",
    placeId: "",
    location: [0, 0],
  });
  const [userLocationState, setUserLocationState] = useState(
    LOCATION_STATES.PENDING,
  );
  const [userLocation, setUserLocation] = useState(null);

  usePlacesService({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const getUserLocation = () => {
    // TODO: The location is only retrieved once on load and never again.
    //  This works fine as of now since the app is not expected to be used while the user is in motion
    //  Later, the current position must be polled to update frequently
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        const distanceToAirport = getDistance(
          { latitude: lat, longitude: lng },
          {
            latitude: STOPS_DATA.airport.loc[0],
            longitude: STOPS_DATA.airport.loc[1],
          },
        );
        if (distanceToAirport < 1000) {
          // If user is near the airport, we set the current location but not input location
          // User has to manually enter the destination in the input box
          setSelectedTab(TABS[1].id);
        } else {
          setInputLocation({ lat, lng });
        }
        setUserLocation({ lat, lng });
        setUserLocationState(LOCATION_STATES.APPROVED);
      },
      (error) => {
        if (error.code === 1) {
          setUserLocationState(LOCATION_STATES.DENIED);
        } else {
          console.log(error);
        }
      },
    );
  };

  const onResize = () => {
    setBodyHeight(window.visualViewport?.height || window.innerHeight);
  };

  useEffect(() => {
    // Fallback for older devices that don't support visualViewport API.
    // visualViewport is still preferred because it gives the size excluding other UI elements like soft keyboards and
    // works well for embeds/split screens
    (window.visualViewport || window).addEventListener("resize", onResize);
    onResize();
    return () => {
      (window.visualViewport || window).removeEventListener("resize", onResize);
    };

    // const bodyObserver = new ResizeObserver(onResize);
    // bodyObserver.observe(document.body);
    // return () => {
    //   bodyObserver?.disconnect();
    // };
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    // When the app opens, try to get user's location
    if ("geolocation" in navigator) {
      // TODO: Rename. Doesn't actually "get", rather sets the user location state and input location
      getUserLocation();
    } else {
      setUserLocationState(LOCATION_STATES.UNAVAILABLE);
    }
  }, []);

  useEffect(() => {
    if (!inputLocation) {
      return;
    }
    const locations = JSON.parse(localStorage.getItem("locations") || "[]");
    const sortedLocations = lSortBy(
      lMap(locations, (l) => ({
        ...l,
        distance: getDistance(
          { latitude: inputLocation.lat, longitude: inputLocation.lng },
          { latitude: l.location[0], longitude: l.location[1] },
        ),
      })),
      "distance",
    );
    const closestLocation = sortedLocations[0];

    if (closestLocation && closestLocation.distance < 50) {
      // There's a location in the past list within 50m of the current location input
      setInputLocationMetadata(closestLocation);
    } else {
      // Get the name of place from input location.
      // This happens if the user selects a lat,lng on the map and adjusts it farther from previously input text or
      // if the user cleared local storage
      const geocoder = new google.maps.Geocoder();
      geocoder
        .geocode({ location: inputLocation })
        .then(({ results }) => {
          const { formatted_address, place_id } = results[0] || {};
          saveLocationMedata(place_id, formatted_address, [
            inputLocation.lat,
            inputLocation.lng,
          ]);
          setInputLocationMetadata({
            placeId: place_id,
            name: formatted_address,
            location: [inputLocation.lat, inputLocation.lng],
          });
        })
        .catch((e) => {
          // Ignore the error than notify user. It might not matter much to the user when location lat lng is shown instead
          // of text but would be an unnecessary information overload/distraction if the user is notified of the background api call failing
          // which doesn't affect the core functionality.
          console.log("Error");
          console.log(e);
        });
    }
  }, [inputLocation]);

  return (
    <div id="app-container">
      {currentScreen === APP_SCREENS.INITIAL && (
        <InitialScreen
          userLocation={userLocation}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          inputLocation={inputLocation}
          setCurrentScreen={setCurrentScreen}
          inputLocationMetadata={inputLocationMetadata}
          lang={lang}
          setLang={setLang}
          bodyHeight={bodyHeight}
        />
      )}
      {currentScreen === APP_SCREENS.LOCATION_TEXT && (
        <SearchText
          selectedTab={selectedTab}
          setCurrentScreen={setCurrentScreen}
          setInputLocation={setInputLocation}
          bodyHeight={bodyHeight}
        />
      )}
      {currentScreen === APP_SCREENS.LOCATION_MAP && (
        <SearchMap
          selectedTab={selectedTab}
          inputLocation={inputLocation}
          setInputLocation={setInputLocation}
          setCurrentScreen={setCurrentScreen}
          bodyHeight={bodyHeight}
        />
      )}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Container />);
