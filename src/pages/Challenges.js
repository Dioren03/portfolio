// src/pages/Challenges.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

function Challenges() {
  return (
    <div className="page-container">
      <h1 className="page-title">Challenges & Learnings</h1>

      <div className="challenges-list">
        <p>
         As a 3rd year Computer Science student, I’ve encountered some of the most intense and formative challenges in my academic journey so far. Diving into complex subjects like data structures, algorithms, operating systems, and systems programming pushed me far beyond surface-level coding. These topics didn’t just test my technical ability they tested my mindset, patience, and problem-solving process.</p>     
        <p>
         There were moments when the workload felt overwhelming, especially when faced with tight deadlines or debugging issues deep in the logic of a program. But these situations taught me to slow down, break big problems into smaller parts, and approach challenges methodically. I also learned that asking the right questions whether to peers, on instrutors, or even ChatGPT can be just as important as finding the answers.</p>
        <p>
         Balancing academics with content creation, fitness, and personal growth was another major hurdle. Managing time between writing code, editing videos, preparing for exams, and staying consistent with my routine required discipline. Through this, I developed stronger prioritization skills, the ability to plan ahead, and most importantly, the habit of showing up even when motivation runs low. </p>
        <p>
         Above all, I’ve come to see setbacks not as failures, but as essential parts of growth. Each late night, failed build, or confusing assignment has contributed to shaping me not just into a more capable developer, but into a more resilient, thoughtful, and determined version of myself.</p>
      </div>
         
      <Link to="/" className="back-button">BACK◄</Link>
    </div>
  );
}

export default Challenges;
