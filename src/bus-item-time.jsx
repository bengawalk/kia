import React from "react";

const timeTextDisplay = (number) => number < 10 ? `0${number}` : number

const BusItemTime = ({ msm, currentTime }) => {
  const hours = Math.floor(msm/60);
  const minutes = msm - hours * 60;
  return <div className={`route-item-time ${(msm < currentTime ? "disabled" : "")}`}>
    {timeTextDisplay(hours)}:{timeTextDisplay(minutes)}
  </div>;
};

export default BusItemTime;
