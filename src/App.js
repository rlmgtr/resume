import Header from "./Components/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Porftolio"

function App() {
  return (
    <div className="entirePage">

      <header className="headerStyle">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    </header>


    </div>
  );
}

export default App;
