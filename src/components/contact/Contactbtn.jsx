import React from "react";
import SendIcon from "@mui/icons-material/Send";

function Contactbtn() {
  return (
    <button type="submit" className="contactBtn">
      <SendIcon className="sendIcon" />
      Say Hi
    </button>
  );
}

export default Contactbtn;
