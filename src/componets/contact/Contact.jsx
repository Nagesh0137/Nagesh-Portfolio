import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import Swal from "sweetalert2"; // Import SweetAlert
import "./Contact.css"; // Custom CSS file for remaining styles

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a4d6bca-0e42-4edc-83b3-cd3c62754727");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        SuccessAlert(); // Call SweetAlert for success
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Failed to submit form");
    }
  };

  const SuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Form Submitted!",
      text: "Your form has been successfully sent.",
      showConfirmButton: false,
      timer: 2000, // Auto close after 2 seconds
    });
  };

  return (
    <div id="contact" className="container mt-5">
      {/* heading */}
      <div className="position-relative mb-5" data-aos="fade-up">
        <h3 className="fw-bold text-muted ">Contact</h3>
        <span className="divider"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper border shadow p-3 rounded-2 d-flex justify-content-center align-items-center flex-wrap mt-5">
        <div
          data-aos="fade-up"
          className=" d-flex justify-content-center align-items-center flex-row flex-md-row w-100">
          <div className="text-center mb-4 mb-md-0" data-aos="zoom-in">
            <div>
              <h3 className="display-4 fw-bold ">You Need EMP</h3>
              <div className="mb-2">
                <button className="btn btn-sm btn-warning text-white btn-lg rounded-lg shadow">
                  <BsArrowRight className="rotate-icon-md" />
                </button>
              </div>
              <h3 className="lead sm-display-4">
                Beautiful design for your website? Leave a request
              </h3>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className=" p-2 mt-md-5 mt-2 w-100">
          <form
            className="d-flex flex-column gap-3 w-100 mx-auto"
            onSubmit={onSubmit}>
            <input
              className="form-control shadow-sm rounded"
              type="email"
              placeholder="ex. example@email.com"
              name="email"
              data-aos="zoom-in"
              required
            />
            <input
              className="form-control shadow-sm rounded"
              type="text"
              placeholder="ex. Rohit Sharma"
              required
              name="name"
            />
            <textarea
              className="form-control shadow-sm rounded"
              rows="4"
              required
              placeholder="Write your message"
              name="message"
            />
            <button
              data-aos="zoom-in"
              className="btn send-button w-25 mx-auto btn-warning text-white fw-bold d-flex justify-content-center align-items-center"
              type="submit">
              <span>Send</span>
              <i>
                <RiSendPlaneFill className="ms-1" />
              </i>
            </button>
          </form>
        </div>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
