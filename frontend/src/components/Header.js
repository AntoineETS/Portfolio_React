import React from 'react';
import homeImage from './../images/Home.png';

function Header({ activeTab, onTabChange }) {
    return (
        <header>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none', padding: 0 }}>
                    <li>
                        <button class="button" onClick={() => onTabChange('home')} className={activeTab === 'home' ? 'active' : ''}>
                        <img src={homeImage} alt="Bouton home" style={{ width: '40px', height: '28px' }} />
                        </button>
                    </li>
                    <li style={{ margin: '0 auto' }}>
                        <button class="button" onClick={() => onTabChange('projects')} className={activeTab === 'projects' ? 'active' : ''}>
                            Projects
                        </button>
                    </li>
                    <li style={{ margin: '0 auto' }}>
                        <button onClick={() => onTabChange('about')} className={activeTab === 'about' ? 'active' : ''}>
                            About
                        </button>
                    </li>
                    <li style={{ margin: '0 auto' }}>
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
