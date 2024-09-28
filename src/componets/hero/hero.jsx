import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";
import { FaLinkedinIn, FaPlay } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "/Nagesh Sonawane Resume CV.pdf";
import { BiSolidArrowToTop } from "react-icons/bi";
import "./HeroStyle.css"; // Import the custom CSS file

const Hero = () => {
  return (
    <div id="home" className="bg-gradient-custom">
      <div className="container pt-5 h-100vh d-flex flex-column-reverse flex-md-column-reverse flex-lg-row align-items-center">
        <div className="left mt-4 mt-md-0 flex-grow-1 d-flex flex-column justify-content-center gap-4 gap-md-5 w-100 py-2">
          <div className="info ms-4 ms-md-0 d-flex flex-column align-items-start gap-2 gap-md-3  text-lg-start">
            <h2 data-aos="fade-up" className="text-5xl web-dev font-bold">
              Hello, I'm Web Dev
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-warning text-4xl font-bold"
            />
            <p
              data-aos="fade-up"
              className="text-lg w-100 fw-bold m-0 p-0 w-md-75 text-gray-600 mx-auto mx-lg-0"
            >
              Front-end React Developer
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="buttons ms-4 ms-md-0 d-flex grid gap-3"
          >
            <a href="#contact" className="btn btn-dark  px-4 py-2 font-bold">
              <span>Hire Me</span>
            </a>
            <a
              href={resumePDF}
              id="btn"
              className="btn button resume-btn d-flex align-items-center gap-2"
              download
            >
              <span className="d-flex align-items-center">
                <button
                  className="action_has bg-transparent border-0 has_saved"
                  aria-label="save"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      data-path="box"
                    ></path>
                    <path
                      d="M7 3L7 8L15 8"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      data-path="line-top"
                    ></path>
                    <path
                      d="M17 20L17 13L7 13L7 20"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      data-path="line-bottom"
                    ></path>
                  </svg>
                </button>
                Resume
              </span>
            </a>
          </div>
          <div className="icons">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="d-flex gap-3 list-unstyled ms-4 m-md-0 ms-md-0 justify-content-md-start"
            >
              <li>
                <a
                  href="https://github.com/Nagesh0137"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="icon-size hover-scale github" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/nagesh-sonawane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="icon-size hover-scale linkedin" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nagesh_sonawane013_7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon-size hover-scale instagram" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(event) => {
                    event.preventDefault();
                    Swal.fire("WhatsApp & Call:- +918888430137");
                  }}
                  rel="noopener noreferrer"
                >
                  <IoCallSharp className="icon-size text-success hover-scale facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="icon-size hover-scale twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 profile">
          <div className="right flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="relative d-flex align-items-center">
              <div className="dp-background">
                <div className="dp"></div>
              </div>
              <div className="loader bg-dot"></div>
              <div className="absolute bottom-3 right-2">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="position-relative cursor-pointer"
                >
                  <img
                    className="w-135 circle-text"
                    src="./criclelog.png"
                    alt="w-100"
                  />
                  <FaPlay className="text-black absolute top-50 start-50 translate-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-warning top-scroll p-2 rounded-circle position-fixed"
          style={{ bottom: "20px", right: "20px" }}
          onScroll={() => {
            console.log("hello");
            document.getElementsByClassName(".top-scroll").style.display =
              "block";
          }}
        >
          <a href="#home">
            <BiSolidArrowToTop className="fs-2" color="#000 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
