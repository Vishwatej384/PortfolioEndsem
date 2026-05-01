import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <Hero />
      <Highlights />
      <About />
      <Projects />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
