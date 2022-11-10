import React from "react";
import Me from "./me-me-new.jpg";
import ParaAbout from "./ParaAbout";
function AboutMe() {
  return (
    <div id="about">
      <div className="imgBack"></div>
      <img src={Me} alt="me" className="myImage" />
      <ParaAbout />
    </div>
  );
}

export default AboutMe;
