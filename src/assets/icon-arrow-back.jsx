import React from "react";

const IconArrowBack = ({ fill }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="icon-back-arrow"
  >
    <path
      d="M19.9999 11V13H7.99991L13.4999 18.5L12.0799 19.92L4.15991 12L12.0799 4.07996L13.4999 5.49996L7.99991 11H19.9999Z"
      fill={fill || "black"}
    />
  </svg>
);

export default IconArrowBack;
