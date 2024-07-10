import React, { useEffect, useState } from "react";
import { BsFillMenuButtonFill } from "react-icons/bs";
import "./NavbarStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const navItems = [
  { id: 0, name: "home" },
  { id: 1, name: "skills" },
  { id: 2, name: "works" },
  { id: 3, name: "resume" },
  { id: 4, name: "contact" },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-100 mx-auto fixed-top py-3 z-30 ${
        scrollPosition > 0 ? `bg-white shadow` : "bg-gradient-custom"
      }`}>
      <nav className="navbar navbar-expand-lg m-0 p-0">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Nagesh Sonawane
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="">
              {" "}
              <BsFillMenuButtonFill />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-uppercase d-flex align-items-baseline ms-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className={`nav-link ${
                      activeIndex === index ? "active" : ""
                    }`}
                    href={`#${item.name}`}
                    onClick={() => setActiveIndex(index)}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a className="hire-btn" href="#contact">
                  <button className="btn btn-dark m-0">Hire me</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
