import React from "react";
import Git from '../assets/git.png'
import aedIn from '../assets/linkedin.png'
import Mail from '../assets/email.png'
import { a } from "react-router-dom";
import "./styles/Screens.css";

export default function Contact() {
  return (
    <>
      <h2>You Can Contact Me Through These Channels</h2>
      <div className="icon-container">
        <a href="https://github.com/malikwashington" target='_blank'>
          <img className="contact-image" id="git" src={Git} />
        </a>
        <a href="https://www.linkedin.com/in/malikwashington/" target='_blank'>
          <img className="contact-image" id="aedin" src={aedIn} />
        </a>
        <a href="https://www.google.com/" target='_blank'>
          <img className="contact-image" id="email" src={Mail} />
        </a>
      </div>
    </>
  );
}
