import React from "react";
import caveEntrance from "../assets/CaveEntrance_Long.png";
import stars from "../assets/Stars.png";
import { ParallaxLayer } from "@react-spring/parallax";

function Background() {
  return (
    <div>
      <ParallaxLayer
        speed={1.5}
        factor={1}
        style={{
          background: "linear-gradient(#000000, #000033, #3d0099, #e6ccff)",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        speed={1}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={1}
        style={{
          backgroundImage: `url(${caveEntrance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></ParallaxLayer>
      {/* <ParallaxLayer
        offset={2}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${caveEntrance})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></ParallaxLayer> */}
    </div>
  );
}

export default Background;
