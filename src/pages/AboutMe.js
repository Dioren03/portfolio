// src/pages/AboutMe.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

function AboutMe() {
  return (
    <div className="page-container">
      <div className="about-content">
        <h1 className="page-title">ABOUT ME</h1>
        <p className="page-description">
          &nbsp;&nbsp;&nbsp;&nbsp;I’m Dominant Dioren, a 22-year-old Computer Science student and Content Creator who shares my passion for fitness, self-discipline, and lifestyle through platforms like TikTok, YouTube, and Facebook. 
          
          I love documenting my progress and mindset to motivate others. Outside of fitness, I enjoy photography and videography especially when I’m working on creative projects with my team. I also dive into coding, game development, and web design, currently building my own React portfolio and developing a 2D game in Godot. 
          
          I value self-growth, enjoy joining personal challenges like the Winter Arc, and I’m driven by a desire to improve daily and inspire people through my hustle and lifestyle.
        </p>
      </div>
      <Link to="/" className="back-button">BACK◄</Link>
    </div>
  );
}

export default AboutMe;
