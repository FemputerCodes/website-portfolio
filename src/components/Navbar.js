// start type rfce and hit tab to get the template
// the use state hook makes variables Reactive! It will re-render the component.
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbar">
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="menu-button" aria-label="Open Menu">
          <MenuIcon className="menu" onClick={toggleMenu} />
        </button>
      </div>
      <div className="hidden-links" id={openMenu ? "open" : "close"}>
        <a href="#home" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" onClick={toggleMenu}>
          About Me
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
