import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className="social-links">
          <a 
            href="https://github.com/vishwatej" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/vishwatej" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
          <a 
            href="https://www.codechef.com/users/vishwatej" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link codechef"
            title="CodeChef"
          >
            <i className="fas fa-code"></i>
            CodeChef
          </a>
        </div>

        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <p>Location: Your City, Country</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
