import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <div className="minHeight">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path="/about" exact component={About} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
