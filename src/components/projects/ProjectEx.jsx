import React from "react";
import long from "./projects-img/longtermtrends.png";
import easy from "./projects-img/easybank.png";
import tin from "./projects-img/tindog.png";
import pfe from "./projects-img/pfe.png";
import MoreProjects from "./MoreProjects";

function ProjectEx(props) {
  return (
    <div className="projects">
      <div className="projectExample">
        <div className="crop">
          <img src={long} style={{ height: "300px" }} alt="" />
        </div>
        <h5>Longtermtrends</h5>
        <a target="_blank" href="https://www.longtermtrends.net/">
          <div className="visitbtn">Visit</div>
        </a>
      </div>

      <div className="projectExample">
        <div className="crop">
          <img src={easy} alt="" />
        </div>
        <h5>Easybank</h5>
        <a target="_blank" href="https://github.com/LouayBejaoui/easybank">
          <div className="visitbtn">Visit</div>
        </a>
      </div>

      <div className="projectExample">
        <div className="crop">
          <img src={tin} alt="" />
        </div>
        <h5>Tindog</h5>
        <a target="_blank" href="https://github.com/LouayBejaoui/tindog">
          <div className="visitbtn">Visit</div>
        </a>
      </div>

      <div className="projectExample">
        <div className="crop">
          <img src={pfe} alt="" />
        </div>
        <h5>Post Office project</h5>
        <a target="_blank" href="https://github.com/LouayBejaoui/PFE-project">
          <div className="visitbtn">Visit</div>
        </a>
      </div>
      <MoreProjects />
    </div>
  );
}

export default ProjectEx;
