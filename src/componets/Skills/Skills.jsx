import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import "./SkillsStyle.css";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaRegPenToSquare } from "react-icons/fa6";

import {
  SiJavascript,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiWordpress,
  SiGithub,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className="container mt-5">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-4">
          <h3 className="text-3xl fw-bold text-muted">My Skills</h3>
          <span className="h-1 position-absolute w-90 bg-secondary block"></span>
        </div>
        {/* content */}
        <div className="d-flex flex-column flex-md-row">
          <div className="flex-1 w-100">
            <p data-aos="fade-up" className="text-muted fw-medium w-100">
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="d-flex align-items-center justify-content-center shadow-lg ">
              <div className="d-flex flex-column gap-3 w-75 my-4 w-90">
                <ProgressBar
                  logo={
                    <IoLogoHtml5
                      style={{
                        backgroundColor: "#E34F26",
                        color: "#fff",
                      }}
                      className="fs-4 p-"
                    />
                  }
                  name={"HTML"}
                  value={95}
                />
                <ProgressBar
                  logo={
                    <IoLogoCss3
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgb(0, 76, 232), rgb(0, 101, 244))",
                        color: "#fff",
                      }}
                      className="fs-4"
                    />
                  }
                  name={"CSS"}
                  value={88}
                />
                <ProgressBar
                  logo={
                    <SiJavascript
                      style={{
                        background: "#fff",
                        color: "#FFDF00",
                      }}
                      className="fs-4 bg-"
                    />
                  }
                  name={"Javascript"}
                  value={70}
                />
                <ProgressBar
                  logo={
                    <FaReact
                      style={{
                        background: "#0675C4",
                        color: "#fff",
                      }}
                      className="fs-4"
                    />
                  }
                  name={"React Js"}
                  value={80}
                />
                <ProgressBar
                  logo={
                    <SiBootstrap
                      style={{
                        background: "#fff",
                        color: "#722EFA",
                      }}
                      className="fs-4"
                    />
                  }
                  name={"Bootstrap"}
                  value={85}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="position-relative flex-1 d-flex flex-wrap p-4 gap-4 align-items-center justify-content-center w-100 mt-5 mt-md-0">
            <div className="d-flex mt-4 mt-md-0 flex-column gap-4">
              <SkillBox
                logo={<SiGithub />}
                black={"white"}
                white={"black"}
                skill={"GitHub"}
              />
              <SkillBox
                logo={<FcGoogle />}
                black={"white"}
                white={"black"}
                skill={"Google SEO"}
              />
            </div>
            <div className="d-flex mt-4 mt-md-0  flex-column gap-4">
              <SkillBox
                logo={
                  <SiWordpress
                    style={{
                      background: "#000",
                      color: "#722EFA",
                    }}
                  />
                }
                black={"black"}
                white={"black"}
                skill={"Wordpress"}
              />
              <SkillBox
                logo={
                  <FaRegPenToSquare
                    style={{
                      background: "#000",
                      color: "#fff",
                    }}
                  />
                }
                black={"black"}
                white={"black"}
                skill={"Content Writer"}
              />
              {/* Uncomment this if you want to use Next.js */}
              {/* <SkillBox
                logo={<SiNextdotjs className="text-white bg-black rounded-circle border-white overflow-hidden" />}
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
