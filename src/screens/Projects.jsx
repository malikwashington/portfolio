import React from "react";
import "./styles/Screens.css";
import BSide from '../assets/B-Side@2x.png'

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className="project-grid">
        <a
          className="project"
          href="https://genuine-marshmallow-56fd7d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talkin Schmack
        </a>
        <a
          className="project-git"
          href="https://github.com/malikwashington/talkin-smack-fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Link
        </a>
        <p className="description">
          Talkin Schmack is a social media full stack app with authentication.
          Users who are logged in can Talk Schmack (post), and reply to specific
          posts. User profiles are editable and can also be deleted. Come on in
          and Talk Schmack with us!
        </p>

        <a
          className="project"
          href="https://zesty-choux-75ddc4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          B-Side Music
        </a>
        <a
          className="project-git"
          href="https://github.com/malikwashington/maltm-records-front-end"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Link
        </a>
        <p className="description">
          B-Side Music is here to represent music from artists that need to be
          heard. Find and search for artists of varying genres and discover
          songs to add to your collections. Do you have an artist you want
          represented? We can add them to our expanding list and help get them
          discovered. Flip your record to the B side and get ready to hear
          something new.
        </p>

        <a
          className="project"
          href="https://zingy-bavarois-e5a456.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Side-Scrolling Game
        </a>
        <a
          className="project-git"
          href="https://github.com/malikwashington/platform_game"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Link
        </a>
        <p className="description">
          This is a sidescrolling game made with vanilla JS. 
        </p>
      </div>
    </>
  );
}
