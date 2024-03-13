import React, { useRef, useState, useEffect } from "react";
import caveEntrance from "../assets/CaveEntrance_Long.png";
import stars from "../assets/Stars.png";
import "../styles/Home.css";

function Home() {
  const refSky = useRef(null);
  const refCave = useRef(null);
  const refTitle = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
    // console.log("scroll position: ", scrollPosition);
    if (window.innerWidth > 768) {
      refSky.current.style.left = `${scrollPosition * -0.08}px`;
      refTitle.current.style.marginTop = `${scrollPosition}px`;
    } else {
      refTitle.current.style.marginTop = `${scrollPosition}px`;
    }
  };

  useEffect(() => {
    // console.log("useEffect is running");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <section id="home">
      <img src={stars} className="stars" alt="Stars" ref={refSky} />
      <img
        src={caveEntrance}
        className="cave-entrance"
        alt="Cave Entrance"
        ref={refCave}
      />
      <div className="title-container" ref={refTitle}>
        <h1 id="title">
          Hello! I'm{" "}
          <span style={{ color: "var(--blueviolet)", fontWeight: "500" }}>
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
