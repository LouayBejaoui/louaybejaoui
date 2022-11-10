import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
function ContactHeader() {
  return (
    <div className="contactHeader">
      <a target="_blank" href="https://github.com/LouayBejaoui">
        <GitHubIcon style={{ color: "#2a9d8f" }} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/louay-bejaoui-84a55b198/"
      >
        <LinkedInIcon style={{ color: "#2a9d8f" }} />
      </a>
      <a target="_blank" href="mailto:louay.bejaoui@edu.isetcom.tn">
        <EmailIcon style={{ color: "#2a9d8f" }} />
      </a>
      <a target="_blank" href="https://www.instagram.com/louaybejaoui/?hl=en">
        <InstagramIcon style={{ color: "#2a9d8f" }} />
      </a>
    </div>
  );
}

export default ContactHeader;
