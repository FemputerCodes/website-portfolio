import "./App.css";
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
      <Home />
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
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
