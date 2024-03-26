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
    function updateHexagonCell(hexagonCell) {
      console.log("update hexagon function");
      const width = hexagonCell.clientWidth;
      const height = width * 0.5769;
      hexagonCell.style.setProperty("--width", `${width}px`);
      hexagonCell.style.setProperty("--height", `${height}px`);
      console.log("hexagon width: ", width);
      console.log("hexagon height: ", height);
    }
    function handleResize() {
      document.querySelectorAll(".hexagon-cell").forEach(updateHexagonCell);
      /* Adjust margins for hexagon cells */
      /* (screenWidth - (numHex * hexWidth) - ((numHex - 1) * spaceBetween)) / numMargins */
      const hexagonCell1 = document.querySelector(".hexagon-cell:nth-child(1)");
      const hexagonCell2 = document.querySelector(".hexagon-cell:nth-child(2)");
      const hexagonCell3 = document.querySelector(".hexagon-cell:nth-child(3)");
      const hexagonCell5 = document.querySelector(".hexagon-cell:nth-child(5)");
      const hexagonCell6 = document.querySelector(".hexagon-cell:nth-child(6)");
      const hexagonCell7 = document.querySelector(".hexagon-cell:nth-child(7)");
      
      let hexagonCellMargin1 = `calc((100% - (2 * var(--width)) - 25px) / 2)`;
      hexagonCell1.style.marginLeft = hexagonCellMargin1;
      let hexagonCellMargin2 = `calc((100% - (2 * var(--width)) - 25px) / 2)`;
      hexagonCell2.style.marginRight = hexagonCellMargin2;
      let hexagonCellMargin3 = `calc((100% - (3 * var(--width)) - (2 * 25px)) / 2)`;
      hexagonCell3.style.marginLeft = hexagonCellMargin3;
      let hexagonCellMargin5 = `calc((100% - (3 * var(--width)) - (2 * 25px)) / 2)`;
      hexagonCell5.style.marginRight = hexagonCellMargin5;
      let hexagonCellMargin6 = `calc((100% - (2 * var(--width)) - 25px) / 2)`;
      hexagonCell6.style.marginLeft = hexagonCellMargin6;
      let hexagonCellMargin7 = `calc((100% - (2 * var(--width)) - 25px) / 2)`;
      hexagonCell7.style.marginRight = hexagonCellMargin7;
      console.log(
        "hexagonCell1 margin left: ",
        getComputedStyle(hexagonCell1).marginLeft
      );
      console.log(
        "hexagonCell2 margin right: ",
        getComputedStyle(hexagonCell2).marginRight
      );
      console.log(
        "hexagonCell3 margin left: ",
        getComputedStyle(hexagonCell3).marginLeft
      );
      console.log(
        "hexagonCell5 margin right: ",
        getComputedStyle(hexagonCell5).marginRight
      );
      console.log(
        "hexagonCell6 margin left: ",
        getComputedStyle(hexagonCell6).marginLeft
      );
      console.log(
        "hexagonCell7 margin right: ",
        getComputedStyle(hexagonCell7).marginRight
      );
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
        <span style={{ color: "var(--lightblueviolet)", fontWeight: "500" }}>
          About Me
        </span>
      </h1>
      <div class="about-container">
        <div class="about-content">
          <p>
            An aspiring developer graduating soon with a Bachelor of Science in
            Computer Science with experience in developing, testing, and debugging code.
            I'm a quick learner and adaptable to new technologies and frameworks. I enjoy
            both collaborative and self-directed working environments, with the ability to
            communicate and problem-solve.
          </p>
          <p>
            Outside of coding, I enjoy working on personal programming projects, bouldering
            outdoors or at my local gym, spending time with family and friends, traveling,
            and camping.
          </p>
        </div>
        <div class="hexagon-content">
          <ul class="hexagon">
            <li class="hexagon-cell">
              <img
                class="hexagon-cell-img"
                src={pythonIcon}
                alt="python icon"
              />
              <div class="hexagon-cell-title">PYTHON</div>
            </li>
            <li class="hexagon-cell">
              <img class="hexagon-cell-img" src={htmlIcon} alt="html icon" />
              <div class="hexagon-cell-title">HTML</div>
            </li>
            <li class="hexagon-cell">
              <img class="hexagon-cell-img" src={cssIcon} alt="css icon" />
              <div class="hexagon-cell-title">CSS</div>
            </li>
            <li class="hexagon-cell">
              <img class="hexagon-cell-img" src={jsIcon} alt="js icon" />
              <div class="hexagon-cell-title" style={{fontSize: "12px"}}>JAVASCRIPT</div>
            </li>
            <li class="hexagon-cell">
              <img class="hexagon-cell-img" src={cppIcon} alt="c++ icon" />
              <div class="hexagon-cell-title">C++</div>
            </li>
            <li class="hexagon-cell">
              <img class="hexagon-cell-img" src={gitIcon} alt="git icon" />
              <div class="hexagon-cell-title">GIT</div>
            </li>
            <li class="hexagon-cell">
              <img class="hexagon-cell-img" src={sqlIcon} alt="sql icon" />
              <div class="hexagon-cell-title">SQL</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
