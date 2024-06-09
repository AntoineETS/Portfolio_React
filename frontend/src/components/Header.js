import React from 'react';
import './../css/Header.css';

function Header({ activeTab, onTabChange }) {

  return (
    <header className="Header">
      <div style={styles.div} onClick={() => onTabChange('home')} className={activeTab === 'home' ? 'active' : ''}>Home</div>
      <div style={styles.div} onClick={() => onTabChange('cv')} className={activeTab === 'cv' ? 'active' : ''}>Mon CV</div>
      <div style={styles.div} onClick={() => onTabChange('about')} className={activeTab === 'about' ? 'active' : ''}>À propos de moi</div>
      <div style={styles.div} onClick={() => onTabChange('contact')} className={activeTab === 'contact' ? 'active' : ''}>Me contacter</div>
    </header>
  );
};

const styles = {
  div: {
    flex: 1,
    textAlign: 'center',
    padding: '10px',
    cursor: 'pointer',
    border: '1px solid #ddd',
    margin: '0 5px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
};

export default Header;
