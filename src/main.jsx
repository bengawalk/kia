import * as React from "react";
import { createRoot } from "react-dom/client";
import {useEffect, useState} from "react";
import InitialScreen from "./pages/initial";
import {APP_SCREENS, LOCATION_STATES} from "./utils/constants";
import SearchText from "./pages/search_text";
import SearchMap from "./pages/search_map";

const Container = () => {
  const [currentScreen, setCurrentScreen] = useState(APP_SCREENS.INITIAL);
  const [inputLocation, setInputLocation] = useState(null);
  const [userLocationState, setUserLocationState] = useState(LOCATION_STATES.PENDING);

  // const [userLocation, setUserLocation] = useState(null); // Not shown at the moment. Just here for later.

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        setInputLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setUserLocationState(LOCATION_STATES.APPROVED);
      },
      (error) => {
        if(error.code === 1) {
          setUserLocationState(LOCATION_STATES.DENIED);
        }
        else {
          console.log(error);
        }
      });
  }

  useEffect(() => {
    // When the app opens, try to get user's location
    if ("geolocation" in navigator) {
      // TODO: Rename. Doesn't actually "get", rather sets the user location state and input location
      getUserLocation();
    } else {
      setUserLocationState(LOCATION_STATES.UNAVAILABLE);
    }
  }, []);

  return (
    <div id="app-container">
      {
        currentScreen === APP_SCREENS.INITIAL && (
          <InitialScreen
            userLocationState={userLocationState}
            inputLocation={inputLocation}
            setCurrentScreen={setCurrentScreen}
          />
        )
      }
      {
        currentScreen === APP_SCREENS.LOCATION_TEXT && (
          <SearchText setCurrentScreen={setCurrentScreen} setInputLocation={setInputLocation} />
        )
      }
      {
        currentScreen === APP_SCREENS.LOCATION_MAP && (
          <SearchMap />
        )
      }
    </div>
  )
}

const root = createRoot(
  document.getElementById('root')
);
root.render(<Container />);