import React, { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
function Technology(props) {
  const [isActive, setStatus] = useState(false);

  const percentage = props.percentage;
  const customStyle = {
    maxWidth: percentage
  };

  function showPercentage(e) {
    setStatus((isActive) => !isActive);
    console.log(e);
  }

  return (
    <div onScroll={() => showPercentage()} className="technology">
      <h4>
        <VerifiedIcon style={{ marginRight: "10px", color: "#ffebd2" }} />
        {props.name}
      </h4>
      <div className="skill-bar">
        <div
          className={isActive ? "skill-per skill-per-after" : "skill-per"}
          per={props.percentage}
          style={customStyle}
        ></div>
      </div>
    </div>
  );
}
export default Technology;
