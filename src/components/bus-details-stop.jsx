import React, { useState } from "react";
import { floor as lFloor } from "lodash";

import BusItemTime from "./bus-item-time";

import IconStopDestination from "../assets/icon-stop-destination.svg";
import IconStopIntermediate from "../assets/icon-bus-stop-map.svg";
import IconStopSource from "../assets/icon-stop-source.svg";
import IconCollapseChevron from "../assets/icon-collapse-chevron.svg";

import IconOpenLink from "../assets/icon-open-link.svg";
import IconBusStop from "../assets/icon-bus-stop.svg";

import { withTranslation } from "react-i18next";
import { getHoursAndMinutes, timeTextDisplay } from "../utils";
import { STOPS_DATA } from "../utils/constants";
import BusItemLive from "./bus-item-live";

const BusDetailsStop = ({
  stopDetails,
  totalDistance,
  timingsData,
  currentTime,
  selectedTimeIndex,
  setSelectedTimeIndex,
  setSelectedStop,
  busData,
  mapRef,
  refresh
}) => {
  const isStart = stopDetails.distance === 0;
  const isEnd = stopDetails.distance === totalDistance;

  const [expanded, setExpanded] = useState(isStart || isEnd);

  let icon = IconStopIntermediate;
  if (isStart) {
    icon = IconStopSource;
  } else if (isEnd) {
    icon = IconStopDestination;
  }

  const distanceFractionCovered = stopDetails.distance / totalDistance;
  let selectedTime = null;
  if (selectedTimeIndex !== null && timingsData[selectedTimeIndex]) {
    const t = timingsData[selectedTimeIndex];
    const msm = t.start + lFloor(distanceFractionCovered * t.duration);
    selectedTime = getHoursAndMinutes(msm);
  }

  return (
    <div
      className={`sel-bus-stop-row-container ${isStart ? "start" : ""} ${
        isEnd ? "end" : ""
      } ${!(isEnd || isStart) ? "intermediate" : ""}`}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`sel-bus-stop-row ${expanded ? "expanded" : ""}`}
      >
        <img src={icon} alt="" className={isStart || isEnd ? "sel-bus-stop-icon" : "sel-bus-stop-icon-small"} />
        <div className="sel-bus-stop-row-text">{stopDetails.name}</div>
        {selectedTime && (
          <span className="sel-bus-stop-row-selected-time">
            {timeTextDisplay(selectedTime.hours)}:
            {timeTextDisplay(selectedTime.minutes)}
          </span>
        )}
        <img
          src={IconCollapseChevron}
          alt=""
          className={`sel-bus-stop-chevron ${expanded ? "expanded" : ""}`}
        />
      </div>
      {expanded && (
        <div className="sel-bus-stop-expanded-content">
          {stopDetails.name !== STOPS_DATA.airport.name && (
            <button
              className="btn-stop-all-buses"
              onClick={() => setSelectedStop(stopDetails.name)}
            >
              <img src={IconBusStop} alt="" />
              View all buses through this stop
            </button>
          )}
          <a
            className="route-item-location"
            href={`https://www.google.com/maps/search/?api=1&query=${stopDetails.loc[0]},${stopDetails.loc[1]}`}
            target="_blank"
          >
            Open in Google maps
            <img src={IconOpenLink} alt="Open" />
          </a>
          {timingsData.map((t, index) => (
            <BusItemTime
              selected={index === selectedTimeIndex}
              index={index}
              setSelectedTimeIndex={setSelectedTimeIndex}
              key={t.start}
              msm={t.start + lFloor(distanceFractionCovered * t.duration)}
              currentTime={currentTime}
            />
          ))}
        </div>
      )}
      {busData && busData.map((b) => (
          <BusItemLive
          key={b.regno}
          liveBusDetails={b}
          mapRef={mapRef}
          refreshFunction={refresh}
          />
      ))}
    </div>
  );
};

export default withTranslation()(BusDetailsStop);
