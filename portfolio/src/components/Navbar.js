import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Portfolio</h1>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#highlights" className="nav-link" onClick={closeMenu}>Highlights</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle light and dark theme"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
