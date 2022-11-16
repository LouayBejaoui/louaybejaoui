import React, { useState } from "react";
import handleViewport from 'react-in-viewport';
import VerifiedIcon from "@mui/icons-material/Verified";
function Technology(props) {


  const percentage = props.percentage;
  const customStyle = {
    maxWidth: percentage
  };


  return (
    <div  className="technology">
      <h4>
        <VerifiedIcon style={{ marginRight: "10px", color: "#ffebd2" }} />
        {props.name}
      </h4>
      <div className="skill-bar">
        <div
          className={"skill-per skill-per-after"}
          per={props.percentage}
          style={customStyle}
        ></div>
      </div>
    </div>
  );
}
export default Technology;
