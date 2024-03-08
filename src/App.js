import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import caveEntrance from "./assets/CaveEntrance.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      <Parallax>
        {/* <ParallaxLayer
          offset={0}
          style={{
            background: linear-gradient(#2b1055, #7597de);
            backgroundColor: "blue",
            backgroundSize: "contain",
          }}
        ></ParallaxLayer> */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${caveEntrance})`,
            backgroundSize: "contain",
          }}
        ></ParallaxLayer>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <main>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Chatbot />
        </main>
      </Parallax>
    </div>
  );
}

export default App;
