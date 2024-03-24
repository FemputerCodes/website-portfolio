import React, { useRef, useState, useEffect } from "react";
import caveEntrance from "../assets/CaveEntrance_Long.png";
import stars from "../assets/Stars.png";
import "../styles/Home.css";

function Home() {
  const refSky = useRef(null);
  const refStars = useRef(null);
  const refCave = useRef(null);
  const refTitle = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
    refSky.current.style.bottom = `${scrollPosition * 0.2}px`;
    refStars.current.style.right = `${scrollPosition * 0.08}px`;
    refTitle.current.style.marginTop = `${scrollPosition * 0.8}px`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <section id="home">
      <div className="sky" alt="Sky" ref={refSky}></div>
      <img src={stars} className="stars" alt="Stars" ref={refStars} />
      <img
        src={caveEntrance}
        className="cave-entrance"
        alt="Cave Entrance"
        ref={refCave}
      />
      <div className="title-container">
        <h1 id="title" ref={refTitle}>
          Hello! I'm{" "}
          <span style={{ color: "var(--lightblueviolet)", fontWeight: "500" }}>
            Meghan
          </span>
          .<br />
          I'm an aspiring web developer.
        </h1>
      </div>
    </section>
  );
}

export default Home;
