import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <span>Louay Bejaoui</span>
      <div className="footericons">
        <a href="https://github.com/LouayBejaoui">
          {" "}
          <FaGithubSquare
            size={30}
            style={{ marginRight: "20px", color: "#2a9d8f" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/louay-bejaoui-84a55b198/">
          {" "}
          <FaLinkedin
            size={30}
            style={{ marginRight: "20px", color: "#2a9d8f" }}
          />
        </a>
        <a href="mailto:louay.bejaoui@edu.isetcom.tn">
          {" "}
          <SiGmail
            size={30}
            style={{ marginRight: "20px", color: "#2a9d8f" }}
          />
        </a>
        <a href="https://www.instagram.com/louaybejaoui/?hl=en">
          {" "}
          <FaInstagramSquare
            size={30}
            style={{ marginRight: "20px", color: "#2a9d8f" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
