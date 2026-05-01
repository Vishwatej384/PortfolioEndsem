import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
