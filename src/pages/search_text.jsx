import React, {useEffect, useState} from "react";
import IconBack from "../assets/icon-back.svg";
import IconCross from "../assets/icon-cross.svg";
import IconGreyPin from "../assets/icon-grey-pin.svg";
import LogoGoogle from "../assets/logo-google.svg";

import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import {APP_SCREENS, STOPS_DATA} from "../utils/constants";
import {saveLocationMedata} from "../utils";
import {Trans, withTranslation} from "react-i18next";

const SearchText = ({
  selectedTab,
  setCurrentScreen,
  setInputLocation,
  t,
                      bodyHeight,
}) => {
  const [input, setInput] = useState("");

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    debounce: 1000,
    options: {
      location: new window.google.maps.LatLng(...STOPS_DATA.majestic.loc),
      radius: 60000,
      componentRestrictions: {
        country: "in",
      },
    }
  });

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
            location: {
              lat, lng
            }
          },
          name,
          place_id: placeId,
        } = placeDetails;
        saveLocationMedata(placeId, name, [lat(), lng()]);
        setInputLocation({
          lat: lat(),
          lng: lng()
        });
        setCurrentScreen(APP_SCREENS.LOCATION_MAP);
      }
    );
  }

  return (
    <div id="search-page" style={{ height: `${bodyHeight}px`}}>
      <div id="search-heading">
        <button id="search-back" onClick={() => setCurrentScreen(APP_SCREENS.INITIAL)}>
          <img src={IconBack} alt="Back" />
        </button>
        <h3 id="search-heading-text">
          <Trans t={t} i18nKey={
            selectedTab === 'ta' ? "Enter starting point" : "Enter destination"
          } />
        </h3>
      </div>
      <div id="search-input-wrapper">
        <input
          id="search-input"
          placeholder={`${t("Search")}...`}
          value={input}
          onChange={e => setInput(e.target.value)}
          autoFocus
        />
        {
          input.length > 0 && (
            <button id="search-clear" onClick={() => setInput("")}>
              <img src={IconCross} alt="Cancel" />
            </button>
          )
        }
      </div>
      <div id="search-results">
        {
          isPlacePredictionsLoading && (
            <div id="search-loading">
              <div className="spin" />
              <Trans t={t} i18nKey="Loading" />...
            </div>
          )
        }
        {!isPlacePredictionsLoading && placePredictions.map((item) => (
          <div className="search-result-item" key={item.place_id} onClick={() => onPlaceSelect(item.place_id)}>
            <p className="search-result-main-text">{item.structured_formatting.main_text}</p>
            <p className="search-result-secondary-text">{item.structured_formatting.secondary_text}</p>
          </div>
        ))}
        {
          !isPlacePredictionsLoading && input && placePredictions.length < 1 && (
            <div>
              <Trans t={t} i18nKey="No results found" />
            </div>
          )
        }
      </div>

      <div id="search-powered-by">
        Powered by&nbsp;<img src={LogoGoogle} alt="Google" />
      </div>
      <div id="search-footer">
        <button className="search-footer-item" onClick={() => setCurrentScreen(APP_SCREENS.LOCATION_MAP)}>
          <img src={IconGreyPin} alt="" />
          <Trans t={t} i18nKey="Locate on map" />
        </button>
      </div>

    </div>
  )
};

export default withTranslation()(SearchText);

