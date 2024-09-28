import React from "react";
import WorkCard from "../../chip/WorkCard";
import "./WorkStyle.css";
const Work = () => {
  return (
    <div id="works" className="container mt-5">
      {/* Heading */}
      <div data-aos="fade-up" className="position-relative mb-4">
        <h3 className="display-6 fw-bold text-muted">Projects</h3>
        <span
          className="position-absolute end-0 w-100 bg-secondary"
          style={{ height: "1px" }}
        ></span>
      </div>
      <div data-aos="fade-up" className="w-100">
        <p className="text-secondary fw-medium">Here are some of my works.</p>
      </div>
      {/* Card */}
      <div className="card-wrapper mx-auto w-100 mt-3">
        <div className="row">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
