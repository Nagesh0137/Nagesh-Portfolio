import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div
        style={{
          padding: "10px",
          color: "white",
          textAlign: "right",
        }}
        className="social-icon mt-5 d-flex row justify-content-center flex-column-reverse flex-md-row align-items-baseline"
      >
        <div
          data-aos="zoom-in-right"
          className="copyright text-center text-md-start col-12 col-md-6"
        >
          &copy; {new Date().getFullYear()} Nagesh Sonawane. All rights
          reserved.
        </div>
        <hr className="d-block d-md-none bg-white mt-2"></hr>
        <div data-aos="zoom-in-left" className="col-12 col-md-6 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Nagesh0137"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn w-color" style={{ fontSize: "15px" }}>
              <i className="fa-brands fa-github"></i> GitHub
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=%2B918888430137&text&type=phone_number&app_absent=0"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn w-color" style={{ fontSize: "15px" }}>
              <i className="fa fa-whatsapp"></i> Whatsapp
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/nagesh-sonawane"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn w-color" style={{ fontSize: "15px" }}>
              <i className="fa fa-linkedin"></i> LinkedIn
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/nagesh_sonawane013_7/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn w-color" style={{ fontSize: "15px" }}>
              <i className="fa fa-instagram"></i> Instagram
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+918888430137"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn w-color" style={{ fontSize: "15px" }}>
              <i className="fa fa-phone"></i> Call Now
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:nageshsonawane870@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="btn w-color" style={{ fontSize: "15px" }}>
              <i className="fa fa-envelope-o"></i> Mail
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
