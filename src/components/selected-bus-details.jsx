import React, { useEffect, useState } from "react";
import { Trans, withTranslation } from "react-i18next";
import ALL_BUSES_STOPS from "../utils/stops.json";
import _ from "lodash";
import IconBusSide from "../assets/icon-bus-side-blue.svg";
import {
  MAP_STYLE_INTERMEDIATE_STOP,
  MAP_STYLE_ROUTE,
  STOPS_DATA,
} from "../utils/constants";
import BusDetailsStop from "./bus-details-stop";
import IconArrowBack from "../assets/icon-arrow-back";
import { ALL_BUSES_TIMINGS, getIntermediateStopsGeoJson } from "../utils";
import maplibregl from "maplibre-gl";

const SelectedBusDetails = ({
  setSelectedBus,
  selectedBus,
  setSelectedStop,
  currentTime,
  selectedTabData,
  toAirport,
  t,
  mapRef,
}) => {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  useEffect(() => {
    const currentRef = mapRef.current;
    if (!currentRef) {
      return;
    }

    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    const showPopup = (e) => {
      currentRef.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.name;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current);
    };

    const onStopClick = (e) => {
      const feature = e.features[0];

      const { name } = feature.properties;
      setSelectedStop(name);
    };

    const hidePopup = () => {
      currentRef.getCanvas().style.cursor = "";
      popup.remove();
    };

    const callFnIfMapLoaded = (fn) => {
      if (mapRef.current._loaded) {
        fn();
      } else {
        mapRef.current.on("load", fn);
      }
    };

    const addLayerAndEvents = () => {
      currentRef.addSource(uniqueName, getIntermediateStopsGeoJson(stops));
      currentRef.addLayer({
        id: uniqueName,
        source: uniqueName,
        ...MAP_STYLE_INTERMEDIATE_STOP,
      });

      // Show bus stop name on hovering on the circle
      currentRef.on("mouseenter", uniqueName, showPopup);
      mapRef.current.on("click", uniqueName, onStopClick);
      currentRef.on("mouseleave", uniqueName, hidePopup);
    };

    callFnIfMapLoaded(addLayerAndEvents);

    return () => {
      if (!currentRef) {
        return;
      }
      currentRef.off("mouseenter", uniqueName, showPopup);
      currentRef.off("click", uniqueName, onStopClick);
      currentRef.off("mouseleave", uniqueName, hidePopup);

      // TODO: Figure out a better way for if check
      // When user opens details of a bus and clicks on search box, the map component is unmounted, and _canvas property is undefined.
      // In such cases getLayer and removeLayer throw error.
      // But when user opens details of a bus and clicks back to all buses, the layer needs to be removed.
      if (currentRef._canvas) {
        hidePopup();
        if (currentRef.getLayer(uniqueName)) {
          currentRef.removeLayer(uniqueName);
        }
        if (currentRef.getSource(uniqueName)) {
          currentRef?.removeSource(uniqueName);
        }
      }
    };
  }, [mapRef.current]);

  useEffect(() => {
    if (!_.find(selectedTabData, { name: selectedBus })) {
      setSelectedBus(null);
    }
  }, [selectedTabData, selectedBus]);

  const busDetails = _.find(selectedTabData, { name: selectedBus });
  if (!busDetails) {
    return null;
  }

  const { name, start, end, routename } = busDetails;
  const timingsData = ALL_BUSES_TIMINGS[routename];
  const { stops, totalDistance } = ALL_BUSES_STOPS[routename];

  const fromText = toAirport ? start.name : STOPS_DATA.airport.name;
  const toText = toAirport ? STOPS_DATA.airport.name : end.name;
  const direction = toAirport ? "up" : "down";
  const uniqueName = `${selectedBus}_${direction}_intermediate_stops`;



  return (
    <>
      <button className="sel-bus-back" onClick={() => setSelectedBus(null)}>
        <IconArrowBack fill={"#666666"} />
        Back to all buses
      </button>

      <div className="sel-bus-title">
        <img src={IconBusSide} alt="" />
        <span className="sel-but-title-name">{name}</span>
      </div>

      <div className="sel-bus-from-to">
        <span className="text-light">
          <Trans t={t} i18nKey="from" />
        </span>{" "}
        <Trans t={t} i18nKey={fromText} />
        <br />
        <span className="text-light">
          <Trans t={t} i18nKey="to" />
        </span>{" "}
        <Trans t={t} i18nKey={toText} />
      </div>

      <h3 className="mb-2 sel-bus-stops-heading">
        <Trans t={t} i18nKey="Stops on route" />
      </h3>

      <div id="sel-bus-stops-list-container">
        <BusDetailsStop
          stopDetails={{
            distance: 0,
            loc: start.loc,
            name: fromText,
            name_kn: fromText,
          }}
          setSelectedStop={setSelectedStop}
          totalDistance={totalDistance}
          timingsData={timingsData}
          currentTime={currentTime}
          selectedTimeIndex={selectedTimeIndex}
          setSelectedTimeIndex={setSelectedTimeIndex}
        />
        {stops.map((s) => (
          <BusDetailsStop
            key={s.name}
            stopDetails={s}
            setSelectedStop={setSelectedStop}
            totalDistance={totalDistance}
            timingsData={timingsData}
            currentTime={currentTime}
            selectedTimeIndex={selectedTimeIndex}
            setSelectedTimeIndex={setSelectedTimeIndex}
          />
        ))}
        <BusDetailsStop
          stopDetails={{
            distance: totalDistance,
            loc: end.loc,
            name: toText,
            name_kn: toText,
          }}
          setSelectedStop={setSelectedStop}
          totalDistance={totalDistance}
          timingsData={timingsData}
          currentTime={currentTime}
          selectedTimeIndex={selectedTimeIndex}
          setSelectedTimeIndex={setSelectedTimeIndex}
        />
      </div>
    </>
  );
};

export default withTranslation()(SelectedBusDetails);
