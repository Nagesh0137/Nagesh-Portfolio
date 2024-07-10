import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css"; // Custom CSS file for remaining styles

const Resume = () => {
  return (
    <div id="resume" className="container mt-5">
      {/* Heading */}
      <div data-aos="fade-up" className="position-relative mb-5">
        <h3 className="fw-bold text-secondary">Resume</h3>
        <span
          className="position-absolute end-0 w-100 bg-secondary"
          style={{ height: "1.1px" }}></span>
      </div>
      <div data-aos="fade-up" className="w-100">
        <p className="text-secondary">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* Card */}
      <div className="w-100 mt-5 d-flex flex-column flex-md-row gap-3">
        {/* Education */}
        <div className="d-flex col-12 col-md-6 justify-content-center">
          <fieldset data-aos="zoom-in" className="w-100 min-vh-100 p-md-5 py-4">
            <legend className="border bg-light bg-gradient border-secondary rounded-3 shadow-sm py-1 px-4 fw-semibold text-warning">
              Education
            </legend>
            <div className="position-relative border-circle shadow-sm h-100 pt-3">
              {/* Design */}
              <div
                className="design position-absolute d-flex align-items-center"
                style={{
                  left: "-180px",
                  top: "50%",
                  transform: "rotate(90deg)",
                }}>
                <div className="c1 bg-white border border-primary rounded-circle"></div>
                <div
                  className="line bg-secondary"
                  style={{ width: "300px", height: "2px" }}></div>
                <div className="c2 bg-white border border-primary rounded-circle"></div>
              </div>
              {/* Content */}
              <div className="d-flex in-box bg-light bg-gradient flex-column gap-3 h-100 w-100 shadow p-3 rounded">
                <h1 className="fs-4 fw-semibold">BCA, Computer Application</h1>
                <span className="fw-semibold text-secondary">
                  New Arts, Commerce and Science College, Ahmednagar
                </span>
                <span className="fw-semibold text-primary">
                  Year 2024 - (65.18%)
                </span>
                <p className="text-secondary">
                  I completed my BCA in 2024, gaining a strong foundation in
                  computer science and software development, including skills in
                  programming, database management, and web development.
                </p>
                <h1 className="fs-4 fw-semibold">12th, HSC</h1>
                <span className="fw-semibold text-secondary">
                  Babuji Avhad Mahavidyalay, Pathardi
                </span>
                <span className="fw-semibold text-primary">
                  Year 2021 - (88.00%)
                </span>
                <p className="text-secondary"></p>
                <h1 className="fs-4 fw-semibold">10th, SSC</h1>
                <span className="fw-semibold text-secondary">
                  Pandit Jawaharlal Nehru Vidyalay, Ashti
                </span>
                <span className="fw-semibold text-primary">
                  Year 2019 - (84.00%)
                </span>
                <p className="text-secondary"></p>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Experience */}
        <div className="d-flex col-12 col-md-6 justify-content-center">
          <fieldset data-aos="zoom-in" className="w-100 h-100 p-md-5 py-4">
            <legend className="border bg-light bg-gradient rounded-3 border-secondary py-1 px-4 fw-semibold text-warning">
              Experience
            </legend>
            <div className="position-relative shadow-sm border-circle h-100 pt-3">
              {/* Design */}
              <div
                className="design position-absolute d-flex align-items-center"
                style={{
                  left: "-180px",
                  top: "50%",
                  transform: "rotate(90deg)",
                }}>
                <div className="c1 bg-white border border-primary rounded-circle"></div>
                <div
                  className="line bg-secondary"
                  style={{ width: "300px", height: "2px" }}></div>
                <div className="c2 bg-white border border-primary rounded-circle"></div>
              </div>
              {/* Content */}
              <div className="d-flex in-box flex-column bg-light bg-gradient gap-3 h-100 w-100 shadow p-3 rounded">
                <h1 className="fs-4 fw-semibold">
                  Front-end React Developer (Intern)
                </h1>
                <span className="fw-semibold text-secondary">
                  A2Z IT HUB PVT. LTD
                </span>
                <span className="fw-semibold text-primary">
                  May 2024 -(6 Month)
                </span>
                <p className="text-secondary">
                  During my six-month internship as a Front-End React Developer,
                  I worked on projects such as an{" "}
                  <b>
                    IT company website, a construction company website, a news
                    portal, and a bus ticket booking system.
                  </b>{" "}
                  I gained experience with React, Redux, and responsive design,
                  enhancing my problem-solving and teamwork skills.
                </p>
                <h1 className="fs-4 fw-semibold">Wordprees | Google SEO</h1>
                <span className="fw-semibold text-secondary">
                  Blogger- Google AdSense
                </span>
                <span className="fw-semibold text-primary">(1 Year)</span>
                <p className="text-secondary">
                  <ol>
                    <li>
                      Web :{" "}
                      <a href="https://todayupdates24.com/">
                        www.todayupdates24.com
                      </a>
                    </li>
                    <li>
                      Web :{" "}
                      <a href="https://todaycricket24.com/">
                        www.todaycricket24.com
                      </a>
                    </li>
                  </ol>
                  I completed two websites using WordPress, optimizing them with
                  Google SEO techniques and successfully integrating{" "}
                  <b>Google AdSense</b> for monetization.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
