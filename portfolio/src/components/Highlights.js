import React from 'react';
import './Highlights.css';

function Highlights() {
  const stats = [
    { id: 1, value: '150+', label: 'Coding Problems Solved' },
    { id: 2, value: '12+', label: 'Projects Built' },
    { id: 3, value: '8+', label: 'Core Technologies' },
    { id: 4, value: '24h', label: 'Average Response Time' }
  ];

  return (
    <section id="highlights" className="highlights">
      <div className="highlights-container">
        <h2>Highlights</h2>
        <p className="highlights-subtitle">
          A quick overview of my journey in development and problem solving.
        </p>
        <div className="highlights-grid">
          {stats.map((stat) => (
            <article key={stat.id} className="highlight-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
