import React, { useEffect } from "react";
import pythonIcon from "../assets/icons/python_icon.png";
import htmlIcon from "../assets/icons/html_icon.png";
import cssIcon from "../assets/icons/css_icon.png";
import jsIcon from "../assets/icons/js_icon.png";
import cppIcon from "../assets/icons/c++_icon.png";
import gitIcon from "../assets/icons/git_icon.png";
import sqlIcon from "../assets/icons/sql_icon.png";
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
              <img src={htmlIcon} alt="html icon" />
              <div class="hex"></div>
            </div>
            <div class="item2">
              <img src={cppIcon} alt="cpp icon" />
              <div class="hex"></div>
            </div>
          </div>
          <div class="hex-col2">
            <div class="item3">
              <img
                src={pythonIcon}
                width="110"
                style={{ objectFit: "cover" }}
                alt="python icon"
              />
              <div class="hex"></div>
            </div>
            <div class="item4">
              <img src={cssIcon} alt="css icon" />
              <div class="hex"></div>
            </div>
            <div class="item5">
              <img src={gitIcon} alt="git icon" />
              <div class="hex"></div>
            </div>
          </div>
          <div class="hex-col3">
            <div class="item6">
              <img src={jsIcon} alt="javascript icon" />
              <div class="hex"></div>
            </div>
            <div class="item7">
              <img src={sqlIcon} alt="sql icon" />
              <div class="hex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
