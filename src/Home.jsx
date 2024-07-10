import React, { useState } from "react";
import NavBar from "./componets/navbar/Navbar";
import Hero from "./componets/hero/hero.jsx";
import Skills from "./componets/Skills/Skills.jsx";
import Work from "./componets/Work/Work.jsx";
import Resume from "./componets/Resume/Resume.jsx";
import Contact from "./componets/contact/Contact.jsx";
import Footer from "./componets/Footer/Footer.jsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Hero>
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
