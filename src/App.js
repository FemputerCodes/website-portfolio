import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
