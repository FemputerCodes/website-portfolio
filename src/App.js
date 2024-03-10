import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      <Parallax pages={5}>
        <Background />
        <ParallaxLayer offset={0} speed={2}>
          <section id="home">
            <Home />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </ParallaxLayer>
      </Parallax>
      <header>
        <Navbar />
      </header>
      <footer>
        <Chatbot />
      </footer>
    </div>
  );
}

export default App;
