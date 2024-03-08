import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div class="home-container">
      <h1>
        Hello! I'm{" "}
        <span style={{ color: "var(--blueviolet)", fontWeight: "500" }}>
          Meghan
        </span>
        .<br />
        I'm an aspiring web developer.
      </h1>
    </div>
  );
}

export default Home;
