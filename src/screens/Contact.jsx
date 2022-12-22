import React from "react";
import Git from '../assets/git.png'
import LinkedIn from '../assets/linkedin.png'
import Mail from '../assets/email.png'
import { Link } from "react-router-dom";
import "./styles/Screens.css";

export default function Contact() {
  return (
    <>
      <h2>You Can Contact Me Through These Channels</h2>
      <div className="icon-container">
        <Link to={{pathname:"https://github.com/malikwashington"}} target='_blank'>
          <img className="contact-image" id="git" src={Git} />
        </Link>
        <Link to={{pathname:"https://www.linkedin.com/in/malikwashington/"}} target='_blank'>
          <img className="contact-image" id="linkedin" src={LinkedIn} />
        </Link>
        <Link to={{pathname:"https://www.google.com/"}} target='_blank'>
          <img className="contact-image" id="email" src={Mail} />
        </Link>
      </div>
    </>
  );
}
