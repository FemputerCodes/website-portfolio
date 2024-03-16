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
        <div>
          <a href="https://femputercodes.github.io/sudoku/build/web/">PLAY</a>
        </div>
        <div>
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
