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
      hexagon.style.setProperty("--width", `${width}px`);
      hexagon.style.setProperty("--height", `${height}px`);
      console.log("hexagon width: ", width);
      console.log("hexagon height: ", height);
    }
    function handleResize() {
      document.querySelectorAll(".hexagon-cell").forEach(updateHexagon);
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
        <ul class="hexagon">
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={pythonIcon} alt="python icon" /> */}
            <div class="hexagon-cell-title">PYTHON</div>
          </li>
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={htmlIcon} alt="html icon" /> */}
            <div class="hexagon-cell-title">HTML</div>
          </li>
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={cssIcon} alt="css icon" /> */}
            <div class="hexagon-cell-title">CSS</div>
          </li>
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={jsIcon} alt="js icon" /> */}
            <div class="hexagon-cell-title">JAVASCRIPT</div>
          </li>
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={cppIcon} alt="c++ icon" /> */}
            <div class="hexagon-cell-title">C++</div>
          </li>
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={gitIcon} alt="git icon" /> */}
            <div class="hexagon-cell-title">GIT</div>
          </li>
          <li class="hexagon-cell">
            {/* <img class="hexagon-cell-img" src={sqlIcon} alt="sql icon" /> */}
            <div class="hexagon-cell-title">SQL</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
