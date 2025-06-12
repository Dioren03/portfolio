// src/pages/Contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';

function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">CONTACT</h1>
      <div className="page-description">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Feel free to reach out to me for inquiries, collaborations, or opportunities related to tech, creative projects, or fitness. I’m always open to connecting and discussing new ideas or challenges.
        </p>

        <p>
          <strong>TikTok:</strong>{' '}
          <a
            href="https://www.tiktok.com/@dominantdioren"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dominantdioren
          </a>
        </p>

<p>
          <strong>Youtube:</strong>{' '}
          <a
            href="https://www.youtube.com/@dominantdioren"
            target="_blank"
            rel="noopener noreferrer"
          >
            @dominantdioren
          </a>
        </p>
        
        <p><strong>Phone:</strong> 9216788353</p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:Noahgalvez45@gmail.com">Noahgalvez45@gmail.com</a>
        </p>

        <p>I look forward to hearing from you!</p>
      </div>
      <Link to="/" className="back-button">BACK◄</Link>
    </div>
  );
}

export default Contact;
