// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

function Projects() {
  return (
    <div className="page-container">
      <h1 className="page-title">PROJECTS</h1>

      <div className="projects-list">
        <h2 className="project-name">Dodge the Creeps</h2>
        <p className="project-description">
          A simple yet fun 2D survival game created for our Game Development subject. The player dodges incoming enemies for as long as possible. This project helped us explore core concepts like movement control, collision detection, scoring systems, and sprite animations.
        </p>
        <p className="project-tools">
          <strong>Tools Used:</strong> Godot Engine, GDScript
        </p>
        <p className="github-link">
          <strong>GitHub Repository:</strong><br />
          <a href="https://github.com/Dioren03/DODGE_THE_CREEPS.git" target="_blank" rel="noopener noreferrer">DODGE_THE_CREEPS.git</a>
        </p>
      </div>

      <div className="button-wrapper">
        <Link to="/" className="back-button">BACK◂</Link>
      </div>
    </div>
  );
}

export default Projects;
