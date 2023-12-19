import React from "react";
import IconBus from "../assets/icon-bus";
import IconOpenLink from "../assets/icon-open-link.svg";
import { STOPS_DATA } from "../utils/constants";
import BusItemTime from "./bus-item-time";
import ALL_BUSES_TIMINGS from "../utils/timings.json";

import { withTranslation, Trans } from "react-i18next";
import _ from "lodash";

const BusItem = ({
  busDetails,
  selectedBus,
  setSelectedBus,
  toAirport,
  currentTime,
  t,
}) => {
  const { name, start, end, routename } = busDetails;
  const timings = ALL_BUSES_TIMINGS[routename];
  const busSelected = name === selectedBus;

  const locationDetails = toAirport ? start : end;

  if(_.size(timings) === 0) {
    return null;
  }

  return (
    <div className={`route-item bus-${name} ${busSelected ? "selected" : ""}`}>
      <div
        className="route-item-header"
        onClick={() => setSelectedBus(busSelected ? null : name)}
      >
        <IconBus selected={busSelected} />
        <div className="route-item-bus-name">{name}</div>
        <div className="route-item-bus-route">
          <span className="text-light">
            <Trans t={t} i18nKey="from" />
          </span>{" "}
          <Trans
            t={t}
            i18nKey={toAirport ? start.name : STOPS_DATA.airport.name}
          />
          <br />
          <span className="text-light">
            <Trans t={t} i18nKey="to" />
          </span>{" "}
          <Trans
            t={t}
            i18nKey={toAirport ? STOPS_DATA.airport.name : end.name}
          />
        </div>
      </div>
      <div className="route-item-details">
        <h3 className="mb-2">
          <Trans t={t} i18nKey="Departure times" />
        </h3>
        <div className="flex">
          {timings.map((time) => (
            <BusItemTime msm={time} currentTime={currentTime} key={time} />
          ))}
        </div>
        <h3>
          <Trans t={t} i18nKey={toAirport ? "Boarding point" : "Final stop"} />
        </h3>
        <a
          className="route-item-location"
          href={`https://www.google.com/maps/search/?api=1&query=${locationDetails.loc[0]},${locationDetails.loc[1]}`}
          target="_blank"
        >
          <Trans t={t} i18nKey={locationDetails.name} />
          <img src={IconOpenLink} alt="Open" />
        </a>
        {locationDetails.contact && (
          <>
            <h3>
              <Trans t={t} i18nKey="Contact" />
            </h3>
            <a className="link" href={`tel:${locationDetails.contact}`}>
              {locationDetails.contact}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default withTranslation()(BusItem);
