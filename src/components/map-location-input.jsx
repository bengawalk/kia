import React from "react";
import classNames from "classnames";
import {API_CALL_STATUSES, APP_SCREENS} from "../utils/constants";
import {Trans, withTranslation} from "react-i18next";

const MapLocationInput = ({
  googleScriptStatus,
  loadGoogleMapsScript,
  inputLocation,
  setCurrentScreen,
  inputLocationMetadata,
  t,
}) => (
  <div id="li-wrapper">
    {
      googleScriptStatus === API_CALL_STATUSES.LOADING && (
        <div id="search-loading" className="left">
          <div className="spin" />
          <Trans t={t} i18nKey="Loading Google maps" />
          ...
        </div>
      )
    }
    {
      googleScriptStatus === API_CALL_STATUSES.ERROR && (
        <div id="search-loading" className="left">
          Error occurred loading Google API <button className="btn primary ml-2" onClick={loadGoogleMapsScript}>Try again</button>
        </div>
      )
    }
    {
      googleScriptStatus === API_CALL_STATUSES.SUCCESS && (
        <input
          id="li-input"
          className={classNames({
            empty: !inputLocation,
          })}
          placeholder={
            inputLocation
              ? inputLocationMetadata.name ||
              `${inputLocation.lat}, ${inputLocation.lng}`
              : t("Select a starting point")
          }
          onClick={() => setCurrentScreen(APP_SCREENS.LOCATION_TEXT)}
        />
      )
    }
  </div>
);

export default withTranslation()(MapLocationInput);
