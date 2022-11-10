import React, { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

function MoreProjects() {
  const [isHover, change] = useState(false);

  function hoverIn(e) {
    change(true);
  }

  function hoverOut(e) {
    change(false);
  }

  return (
    <div className="moreProjects">
      <a
        target="_blank"
        href="https://github.com/LouayBejaoui?tab=repositories"
      >
        <BsArrowRightCircle
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          className="rightArrow"
          style={{ color: isHover ? "#ffebd2" : "#af4f41" }}
          size={70}
        />
      </a>
      <h4>Find More</h4>
    </div>
  );
}

export default MoreProjects;
