import React from 'react'
import headshot from "../assets/IMG_8267.jpeg";
import { NavLink } from 'react-router-dom';
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="title-logo">
        <NavLink to="/">
          <img src={headshot} alt="cassette logo" className="cassette-logo" />
        </NavLink>
        <h1 className="b-side-music">Malik Washington</h1>
      </div>
      <div className="nav">
        <div className="navlink" activeClassName="active">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/projects">Projects</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/resume">Resume</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}
