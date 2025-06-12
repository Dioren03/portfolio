// src/pages/Resume.js
import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div className="page-container">
      <h1 className="section-title">Resume</h1>

      <p className="resume-info">
       I am currently in the process of revising and updating my resume, which is why it is not available at this time. I appreciate your understanding. </p>
       
       But the back button is working though
      
      <div className="button-wrapper">
        <Link to="/" className="back-button">BACK◂</Link>
      </div>
    </div>
  );
}

export default Resume;
