// src/Sidebar.js
import React from 'react';
import './App.css';

function Sidebar({ setCurrentPage }) {
  return (
    <div className="sidebar">
      <h2 className="site-title">Dominant Dioren</h2>
      <p className="subtitle">Welcome!</p>
      <nav className="nav">
        <a onClick={() => setCurrentPage('about')}>ABOUT ME</a>
        <a onClick={() => setCurrentPage('skills')}>SKILLS</a>
        <a onClick={() => setCurrentPage('projects')}>PROJECTS</a>
        <a onClick={() => setCurrentPage('challenges')}>CHALLENGES & LEARNINGS</a>
        <a onClick={() => setCurrentPage('plans')}>FUTURE PLANS</a>
        <a onClick={() => setCurrentPage('resume')}>RESUME PAGE</a>
        <a onClick={() => setCurrentPage('contact')}>CONTACT US!</a>
      </nav>
    </div>
  );
}

export default Sidebar;
