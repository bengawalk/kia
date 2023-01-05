import React from "react";
import IconBus from "../assets/icon-bus";
import IconOpenLink from "../assets/icon-open-link.svg";
import { STOPS_DATA } from "../utils/constants";
import BusItemTime from "./bus-item-time";
import { withTranslation, Trans } from "react-i18next";

const BusItem = ({
  busDetails,
  selectedBus,
  setSelectedBus,
  toAirport,
  currentTime,
  t,
}) => {
  const { name, start, end, timings } = busDetails;
  const busSelected = name === selectedBus;
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
        {toAirport ? (
          <a
            className="route-item-location"
            href={`https://www.google.com/maps/search/?api=1&query=${start.loc[0]},${start.loc[1]}`}
            target="_blank"
          >
            <Trans t={t} i18nKey={start.name} />
            <img src={IconOpenLink} alt="Open" />
          </a>
        ) : (
          <a
            className="route-item-location"
            href={`https://www.google.com/maps/search/?api=1&query=${end.loc[0]},${end.loc[1]}`}
            target="_blank"
          >
            <Trans t={t} i18nKey={end.name} />
            <img src={IconOpenLink} alt="Open" />
          </a>
        )}
      </div>
    </div>
  );
};

export default withTranslation()(BusItem);
