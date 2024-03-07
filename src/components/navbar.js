// start type rfce and hit tab to get the template

import React from "react";
// import Logo from "../FemputerCodes.png";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>

      {/* <div className="navbarLeft">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbarRight"></div> */}
    </nav>
  );
}

export default navbar;
