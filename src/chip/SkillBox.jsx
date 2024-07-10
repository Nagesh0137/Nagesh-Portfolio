import React from "react";
import "./skillboxStyle.css";
const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={`box d-flex flex-column cards align-items-center justify-content-center gap-3 p-1 rounded skill-box bg-${black} text-${white}`}>
      <div
        className={`d-flex align-items-center justify-content-center rounded-circle skill-logo bg-${white} text-${black}`}>
        {logo}
      </div>
      <p className="fw-semibold skill-text">{skill}</p>
    </div>
  );
};

export default SkillBox;
