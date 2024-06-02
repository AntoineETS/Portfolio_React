import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="App-header">
      <h1>Bienvenue sur notre site web</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
