import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'Frontend',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasting and analytics',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'Frontend',
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for publishing and managing blog posts',
      technologies: ['Node.js', 'MongoDB', 'Express', 'EJS'],
      category: 'Backend',
      link: '#'
    }
  ];

  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="project-filters" role="tablist" aria-label="Project category filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <span className="project-category">{project.category}</span>
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
