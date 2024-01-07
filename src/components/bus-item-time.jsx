import React from "react";
import { getHoursAndMinutes, timeTextDisplay } from "../utils";

const BusItemTime = ({
  msm,
  currentTime,
  selected,
  index,
  setSelectedTimeIndex,
}) => {
  const { hours, minutes } = getHoursAndMinutes(msm);
  return (
    <div
      className={`route-item-time ${msm < currentTime ? "disabled" : ""} ${selected ? "selected" : ""}`}
      onClick={() => setSelectedTimeIndex(index)}
    >
      {timeTextDisplay(hours)}:{timeTextDisplay(minutes)}
    </div>
  );
};

export default BusItemTime;
