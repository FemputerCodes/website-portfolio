import React from "react";
import caveEntrance from "../assets/CaveEntrance.png";
import { ParallaxLayer } from "@react-spring/parallax";

function Background() {
  return (
    <div>
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
    </div>
  );
}

export default Background;
