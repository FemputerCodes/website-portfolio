import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h1>
        <span style={{ color: "var(--blueviolet)", fontWeight: "500" }}>
          Projects
        </span>
      </h1>
      <div class="projects-content-box">
        <h2>Sudoku</h2>
        <div className="live-play">
          <a href="https://femputercodes.itch.io/sudoku">PLAY</a>
        </div>
        <div className="learn-more">
          <a href="https://github.com/FemputerCodes/sudoku">Learn More</a>
        </div>
        <p>
          Implemented in Python using Pygame. Deployed to the web with Pygbag.
        </p>
      </div>
    </div>
  );
}

export default Projects;
