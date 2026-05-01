import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasting and analytics',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for publishing and managing blog posts',
      technologies: ['Node.js', 'MongoDB', 'Express', 'EJS'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
