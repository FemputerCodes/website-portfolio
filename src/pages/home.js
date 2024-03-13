import React from "react";
import caveEntrance from "../assets/CaveEntrance_Long.png";
import stars from "../assets/Stars.png";
import "../styles/Home.css";

function Home() {
  return (
    <header id="home">
      <img src={stars} className="stars" alt="Stars" />
      <img src={caveEntrance} className="cave-entrance" alt="Cave Entrance" />
      <div id="title" className="title-container">
        <h1>
          Hello! I'm{" "}
          <span style={{ color: "var(--blueviolet)", fontWeight: "500" }}>
            Meghan
          </span>
          .<br />
          I'm an aspiring web developer.
        </h1>
      </div>
    </header>
  );
}

export default Home;
