import React from "react";
import pythonSudoku from "../assets/projects/python_sudoku.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h1>
        <span style={{ color: "var(--lightblueviolet)", fontWeight: "500" }}>
          Projects
        </span>
      </h1>
      <div className="projects-container">
        <img
          className="projects-img"
          src={pythonSudoku}
          alt="my python sudoku solver"
        ></img>
        <div className="projects-content">
          <h2>Sudoku</h2>
          <p>Sudoku Solver App</p>
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
    </div>
  );
}

export default Projects;
