import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FemputerCodes</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="My Website" />
      </Helmet>
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
      <Navbar />
      <Chatbot />
    </div>
  );
}

export default App;
