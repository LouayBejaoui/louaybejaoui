import React, { useState } from "react";
import ContactHeader from "./ContactHeader";
import Options from "./Options";
import { BsArrowDownCircle } from "react-icons/bs";
function Navbar() {
  const [isHover, change] = useState(false);
  function hoverIn(e) {
    change(true);
  }

  function hoverOut(e) {
    change(false);
  }

  return (
    <div className="navbar">
      <Options />
      <h1>
        Hello <br></br>
        this is<br></br>
        <span>Louay Bejaoui</span>
      </h1>

      <ContactHeader />
      <a className="arrowDown" href="#about">
        <BsArrowDownCircle
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
          size={50}
          style={{ color: isHover ? "#ffebd2" : "#af4f41" }}
        />
      </a>
      <p>louay.bejaoui@edu.isetcom.tn</p>
    </div>
  );
}

export default Navbar;
