import Header from "./Components/Header";
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="entirePage">
      <Router>
        <header className="headerStyle">
          <Header />
        </header>

       
        <div className="contentStyle">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
