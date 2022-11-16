import React from "react";

function Options() {
  return (
    <div className="options navbar-collapse collapse w-100 order-3 dual-collapse2">
      <a href="#about">
        {" "}
        <h2>About Me</h2>
      </a>
      <a href="#skills">
        {" "}
        <h2>Skills</h2>
      </a>
      <a href="#projects">
        {" "}
        <h2>Projects</h2>
      </a>
      <a href="#contactme">
        {" "}
        <h2>Contact Me</h2>
      </a>
      <a href="" className="activeNavbar">
        {" "}
        <h2 style={{border:"none"}}>Download CV</h2>
      </a>
    </div>
  );
}
export default Options;
