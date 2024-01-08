import React from "react";
import IconBus from "../assets/icon-bus";
import IconOpenLink from "../assets/icon-open-link.svg";
import { STOPS_DATA } from "../utils/constants";
import BusItemTime from "./bus-item-time";
import ALL_BUSES_TIMINGS from "../utils/timings.json";

import { withTranslation, Trans } from "react-i18next";
import _ from "lodash";

const BusItem = ({ busDetails, highlighted, setSelectedBus, toAirport, t }) => {
  const { name, start, end, routename } = busDetails;
  const timings = ALL_BUSES_TIMINGS[routename];

  if (_.size(timings) === 0) {
    return null;
  }

  return (
    <div
      className={`route-item bus-${name} ${highlighted ? "highlighted" : ""}`}
    >
      <div className="route-item-header" onClick={() => setSelectedBus(name)}>
        <IconBus highlighted={highlighted} />
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
    </div>
  );
};

export default withTranslation()(BusItem);
