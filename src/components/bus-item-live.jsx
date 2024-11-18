import React from "react";
import icon from "../assets/icon-bus-live.svg";

const BusItemLive = ({
    liveBusDetails,
    mapRef,
    refreshFunction
}) => {
    const { regno, refresh, lat, long } = liveBusDetails;
  return (
    <div
    onClick={() => mapRef.current.panTo([long, lat])}
    className={`sel-bus-stop-row `}
  >
    <img src={icon} alt="" className="sel-bus-stop-icon" />
    <div className="sel-bus-stop-row-text">{regno}</div>
  </div>
  );
};

export default BusItemLive;