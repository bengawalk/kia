import React from "react";
import IllustrationError from "../assets/illustration-error.svg";

const PageCrashError = () => {
  return (
    <div className="center padding" id="error-page">
      <img src={IllustrationError} alt="" />
      <p>
        We've been notified of the bug.
        <br />
        Please give us sometime and we'll fix the issue
      </p>
      <button className="btn primary" onClick={() => window.location.reload()}>
        Reload page
      </button>
    </div>
  );
};

export default PageCrashError;
