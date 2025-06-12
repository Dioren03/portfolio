// src/pages/FuturePlans.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

function FuturePlans() {
  return (
    <div className="page-container">
      <h1 className="page-title">Future Plans</h1>

      <div className="plans-list">
        <ul>
          <li>
            <strong>Improve My Portfolio –</strong> Build full-stack projects using React, Node.js, and MongoDB. Focus on clean code, Git version control, and professional documentation.
          </li>
          <li>
            <strong>Strengthen Core CS Skills –</strong> Practice algorithms and data structures on LeetCode and HackerRank. Prepare for technical interviews and deepen understanding of core concepts.
          </li>
          <li>
            <strong>Enhance My Game Development Project –</strong> Continue developing and refining my 2D game in Godot. Focus on polish, performance, and preparing it for potential release.
          </li>
          <li>
            <strong>Gain Real-World Experience –</strong> Join open-source projects and participate in hackathons to improve teamwork, code collaboration, and real-world coding exposure.
          </li>
          <li>
            <strong>Develop Soft & Technical Skills –</strong> Keep improving communication, project management, and keep up with the latest tools and practices in software development.
          </li>
        </ul>
      </div>

      <Link to="/" className="back-button">BACK◄</Link>
    </div>
  );
}

export default FuturePlans;
