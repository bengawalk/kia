import React from "react";
import classNames from "classnames";
import {APP_SCREENS} from "../utils/constants";

const MapLocationInput = ({ inputLocation, setCurrentScreen, inputLocationMetadata }) => (
  <div id="li-wrapper">
    <input
      id="li-input"
      className={classNames({
        empty: !inputLocation,
      })}
      placeholder={
        inputLocation ?
          inputLocationMetadata.name || `${inputLocation.lat}, ${inputLocation.lng}` :
          "Select a starting point"
      }
      onClick={() => setCurrentScreen(APP_SCREENS.LOCATION_TEXT)}
    />
  </div>
);

export default MapLocationInput;
