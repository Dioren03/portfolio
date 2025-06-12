// src/pages/Skills.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

function Skills() {
  return (
    <div className="page-container">
      <h1 className="page-title">SKILLS</h1>

      <div className="skills-box">
        <p>
         I’ve built a strong foundation in both theory and practical technologies. I’m confident writing clean, maintainable code and understanding software systems at multiple levels. While still growing, I have skills that help me tackle real challenges.
        </p>

        <ul>
          <li><strong>Programming Languages –</strong> Proficient in JavaScript with experience in Java from coursework.</li>
          <li><strong>Web Development –</strong> Skilled in HTML, CSS, JavaScript, and React.js for building responsive interfaces; learning backend basics with Node.js and databases like MongoDB.</li>
          <li><strong>Software Development Concepts –</strong> Comfortable with data structures, algorithms, OOP, and version control using Git/GitHub.</li>
          <li><strong>Game Development –</strong> Developing a 2D game in Godot, gaining experience with game loops, physics, and scene architecture.</li>
          <li><strong>Tools & Workflows –</strong> Experienced with VS Code, Git, GitHub, command line, Figma for UI planning, and Trello/Notion for project management.</li>
          <li><strong>Soft Skills –</strong> Strong communication, problem-solving, teamwork, leadership, and time management developed through projects and presentations.</li>
        </ul>

        <p>
          I continue to expand my knowledge, especially in backend development and system design through coursework and personal projects.
        </p>
      </div>

      <Link to="/" className="back-button">BACK◄</Link>
    </div>
  );
}

export default Skills;
