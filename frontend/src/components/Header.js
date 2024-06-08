import React from 'react';
import homeImage from './../images/Home.png';

function Header({ activeTab, onTabChange }) {
    return (
        <header style={{ textAlign: 'center' , backgroundColor: 'black'}}>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginRight: 'auto' }}>
                        <button onClick={() => onTabChange('home')} className={activeTab === 'home' ? 'active' : ''}>
                        <img src={homeImage} alt="Bouton home" style={{ width: '40px', height: '28px' }} />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTabChange('projects')} className={activeTab === 'projects' ? 'active' : ''}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTabChange('about')} className={activeTab === 'about' ? 'active' : ''}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTabChange('contact')} className={activeTab === 'contact' ? 'active' : ''}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
