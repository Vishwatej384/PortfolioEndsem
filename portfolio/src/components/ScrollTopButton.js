import React, { useEffect, useState } from 'react';
import './ScrollTopButton.css';

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
      ↑
    </button>
  );
}

export default ScrollTopButton;
