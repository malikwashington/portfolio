import React from "react";
import Git from '../assets/git.png'
import LinkedIn from '../assets/linkedin.png'
import Mail from '../assets/email.png'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div>You Can Contact Me Through These Channels</div>
      <div className="icon-container">
        <Link to="https://github.com/malikwashington">
          <img className="contact-image" src={Git} />
        </Link>
        <Link to="https://www.linkedin.com/in/malikwashington/">
          <img className="contact-image" src={LinkedIn} />
        </Link>
        <Link to="https://www.google.com/">
          <img className="contact-image" src={Mail} />
        </Link>
      </div>
    </>
  );
}
