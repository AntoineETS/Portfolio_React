import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
      document.title = "Antoine Lamontagne | Portfolio"; // Définissez le titre de l'onglet ici
  }, []);

    return (
        <div>
            <Header activeTab={activeTab} onTabChange={handleTabChange} />
            <div>
                {activeTab === 'home' && <Home />}
                {activeTab === 'projects' && <ProjectList />}
                {activeTab === 'about' && <About />}
                {activeTab === 'contact' && <Contact />}
            </div>
            <Footer activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
    );
}

export default App;
