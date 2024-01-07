import React, { useEffect, useState } from "react";
import { Trans, withTranslation } from "react-i18next";
import ALL_BUSES_TIMINGS from "../utils/timings.json";
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
import { getIntermediateStopsGeoJson, getRoutesGeojson } from "../utils";
import mapboxgl from "mapbox-gl";

const SelectedBusDetails = ({
  setSelectedBus,
  selectedBus,
  currentTime,
  selectedTabData,
  toAirport,
  t,
  mapRef,
}) => {
  const busDetails = _.find(selectedTabData, { name: selectedBus });
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const { name, start, end, routename } = busDetails;
  const timingsData = ALL_BUSES_TIMINGS[routename];
  const { stops, totalDistance } = ALL_BUSES_STOPS[routename];

  const fromText = toAirport ? start.name : STOPS_DATA.airport.name;
  const toText = toAirport ? STOPS_DATA.airport.name : end.name;

  useEffect(() => {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    const showPopup = (e) => {
      mapRef.current.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.name;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(mapRef.current);
    };

    const hidePopup = () => {
      mapRef.current.getCanvas().style.cursor = "";
      popup.remove();
    };

    mapRef.current.addSource(
      "intermediate_stops",
      getIntermediateStopsGeoJson(stops),
    );
    mapRef.current.addLayer({
      id: "intermediate_stops",
      source: "intermediate_stops",
      ...MAP_STYLE_INTERMEDIATE_STOP,
    });

    // Show bus stop name on hovering on the circle
    mapRef.current.on("mouseenter", "intermediate_stops", showPopup);
    mapRef.current.on("mouseleave", "intermediate_stops", hidePopup);

    return () => {
      mapRef.current.off("mouseenter", "intermediate_stops", showPopup);
      mapRef.current.off("mouseleave", "intermediate_stops", hidePopup);

      mapRef.current.removeLayer("intermediate_stops");
      mapRef.current.removeSource("intermediate_stops");
    };
  }, [mapRef.current]);

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
