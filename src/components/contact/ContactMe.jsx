import React, { useState, useRef } from "react";
import Contactbtn from "./Contactbtn";
import ContactBox from "./ContactBox";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [result, showResult] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6epqna",
        "template_kwq8j0d",
        form.current,
        "rZ5fUmyo5KhhawgzA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div id="contactme" className="titleSkills">
      <h3>Contact Me</h3>
      <ContactBox />
      <form ref={form} action="" onSubmit={sendEmail}>
        <div className="contactForm">
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your E-mail" />
          <textarea
            name="message"
            placeholder="Your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Contactbtn />
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
