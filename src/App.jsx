import React, { useState } from 'react';
import './index.css';
import AC from "./assets/AC-logo.png"; // Assuming this is your logo path

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleQuizClick = () => {
    alert('Quiz starting soon!');
  };

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={AC} alt="Archetype Chronicles Logo" className="navbar-logo" />
          </a>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776; {/* Unicode hamburger icon */}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#quiz" onClick={() => setIsMenuOpen(false)}>Quiz</a></li>
          <li><a href="#archetypes" onClick={() => setIsMenuOpen(false)}>Archetypes</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="cta-button">
          <a href="#quiz">Take Your Quiz</a>
        </div>
      </nav>

      <main className='content'>
        <div className='ubuntu hero-section'>
          <h1 className="ubuntu header-title">Archetype Chronicles</h1>
          <h3 className='ubuntu'>Unlock the Secrets of Your Character.</h3>
          <button className='quiz-button' onClick={handleQuizClick}>
            Take Your Quiz!
          </button>
        </div>
        <div className='ubuntu description'>
          <p>
            "Archetype Chronicles" is an immersive and interactive website designed to captivate RPG enthusiasts and anyone curious about their place in a fantasy world.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>© {currentYear} Archetype Chronicles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
