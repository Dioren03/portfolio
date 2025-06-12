// src/App.js
import React from 'react';
import './index.css';
import { Link, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Challenges from './pages/Challenges';
import FuturePlans from './pages/FuturePlans';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      {/* Main Layout */}
      <div className="left-section">
        <h1 className="main-title">Dominant Dioren</h1>
        <h2 className="welcome">Welcome!</h2>
      </div>

      <div className="right-section">
        <ul className="nav-list">
          <li><Link to="/about">ABOUT ME</Link></li>
          <li><Link to="/skills">SKILLS</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/challenges">CHALLENGES & LEARNINGS</Link></li>
          <li><Link to="/plans">FUTURE PLANS</Link></li>
          <li><Link to="/resume">RESUME</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/plans" element={<FuturePlans />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
