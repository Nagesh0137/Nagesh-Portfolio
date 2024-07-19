import React from "react";
import "./WorkCard.css";
import { data } from "../Data";
import { RxExternalLink } from "react-icons/rx";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => (
        <>
          <div className="col-12 col-md-4" data-aos="zoom-in">
            <div key={data.id} className="card mt-3">
              <div className="card-details">
                <img
                  src={data.img}
                  alt=""
                  className="w-100 h-100"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <button className="card-button">
                {" "}
                <a
                  href={data.link}
                  target="_blank"
                  className=""
                  style={{ textDecoration: "none", color: "white" }}>
                  <RxExternalLink className=" me-2" /> Check Live
                </a>
              </button>
            </div>
            <div className="card-title text-center pt-3">
              <h5>{data.title}</h5>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default WorkCard;
