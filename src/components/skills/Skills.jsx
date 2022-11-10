import React from "react";
import Technology from "./Technology";
import technologies from "./technologies.js";

function createSkill(technologie) {
  return (
    <Technology name={technologie.name} percentage={technologie.percentage} />
  );
}

function Skills() {
  return (
    <div id="skills" className="titleSkills">
      <span>These are</span>
      <h3>My skills</h3>

      <div className="skills">
        <dl>{technologies.map(createSkill)}</dl>
      </div>
    </div>
  );
}

export default Skills;
