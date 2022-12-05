import React from "react";
import IconBus from "./icon-bus";
import {STOPS_DATA} from "./contants";
import BusItemTime from "./bus-item-time";

const BusItem = ({ busDetails, selectedBus, setSelectedBus, toAirport, currentTime }) => {
  const {
    name,
    start,
    end,
    timings,
  } = busDetails;
  const busSelected = name === selectedBus;
  return (
    <div className={`route-item ${busSelected ? "selected" : ""}`}>
      <div className="route-item-header" onClick={() => setSelectedBus(busSelected ? null : name)}>
        <IconBus selected={busSelected} />
        <div className="route-item-bus-name">
          {name}
        </div>
        <div className="route-item-bus-route">
          <span className="text-light">from</span> {toAirport ? start.name : STOPS_DATA.airport.name}<br />
          <span className="text-light">to</span> {toAirport ? STOPS_DATA.airport.name : end.name}
        </div>
      </div>
      <div className="route-item-details">
        <h3 className="mb-2">Departure times</h3>
        <div className="flex">
          {
            timings.map(time => (
              <BusItemTime msm={time} currentTime={currentTime} key={time} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default BusItem;
