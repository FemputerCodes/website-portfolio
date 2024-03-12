import "./App.css";
import caveEntrance from "./assets/CaveEntrance_Long.png";
import stars from "./assets/Stars.png";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
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
      <Navbar />
      <div className="wrapper">
        <header>
          <img src={stars} className="stars" alt="Stars" />
          <img
            src={caveEntrance}
            className="cave-entrance"
            alt="Cave Entrance"
          />
          <div
            className="background"
            style={{ background: "var(--black)" }}
          ></div>
          <section id="home">
            <Home />
          </section>
        </header>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      <Chatbot />
    </div>
  );
}

export default App;
