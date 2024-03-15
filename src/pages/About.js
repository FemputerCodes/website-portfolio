import React, { useEffect } from "react";
import "../styles/About.css";

function About() {
  useEffect(() => {
    function updateHexagon(hexagon) {
      console.log("update hexagon function");
      const width = hexagon.clientWidth;
      const height = width * 0.5769;
      hexagon.style.setProperty("--height", `${height}px`);
      console.log("hexagon width: ", width);
      console.log("hexagon height: ", height);
    }
    function handleResize() {
      document.querySelectorAll(".hex").forEach(updateHexagon);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="about">
      <h1>
        <span style={{ color: "var(--blueviolet)", fontWeight: "500" }}>
          About Me
        </span>
      </h1>
      <div class="about-container">
        <div class="about-content">
          <p>
            Fromage frais cheddar the big cheese. Chalk and cheese fondue
            dolcelatte feta ricotta port-salut airedale edam. Taleggio smelly
            cheese cow croque monsieur bocconcini ricotta roquefort cow.
            Cheesecake stilton red leicester cut the cheese cheesecake
            mozzarella goat cheesy grin. Squirty cheese hard cheese bocconcini
            queso.
          </p>
          <p>
            Fromage frais cheddar the big cheese. Chalk and cheese fondue
            dolcelatte feta ricotta port-salut airedale edam. Taleggio smelly
            cheese cow croque monsieur bocconcini ricotta roquefort cow.
            Cheesecake stilton red leicester cut the cheese cheesecake
            mozzarella goat cheesy grin. Squirty cheese hard cheese bocconcini
            queso.
          </p>
        </div>
        <div class="hexagon-grid">
          <div class="hex-col1">
            <div class="item1">
              HTML
              <div class="hex"></div>
            </div>
            <div class="item2">
              C++
              <div class="hex"></div>
            </div>
          </div>
          <div class="hex-col2">
            <div class="item3">
              Python
              <div class="hex"></div>
            </div>
            <div class="item4">
              CSS
              <div class="hex"></div>
            </div>
            <div class="item5">
              GIT
              <div class="hex"></div>
            </div>
          </div>
          <div class="hex-col3">
            <div class="item6">
              JAVASCRIPT
              <div class="hex"></div>
            </div>
            <div class="item7">
              SQL
              <div class="hex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
