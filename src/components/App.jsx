import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./Aboutme/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import ContactMe from "./contact/ContactMe";
import Footer from "./footer/Footer";
import "./styles.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
