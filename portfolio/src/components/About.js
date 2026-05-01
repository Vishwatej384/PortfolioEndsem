import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I love creating 
              solutions that combine creativity with functionality.
            </p>
            <p>
              I'm constantly exploring new technologies and improving my skills through 
              competitive programming and real-world projects.
            </p>
          </div>
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
