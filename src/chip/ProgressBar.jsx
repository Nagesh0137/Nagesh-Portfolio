import React from "react";
import "./progresStyle.css";
const ProgressBar = ({ logo, name, value, duration = 3 }) => {
  return (
    <div className="d-flex flex-column gap-2 fs-5 fw-semibold">
      <div className="d-flex justify-content-between">
        <p className="d-flex align-items-center gap-3 fs-6">
          {logo} {name}
        </p>
      </div>
      <div className="progress w-100 rounded-pill bg-secondary position-relative">
        <div
          className="progress-bar position-absolute rounded-pill"
          style={{
            width: `${value}%`,
            animation: `progress-animation ${duration}s linear`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
