import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CV from './components/CV';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
      document.title = "Antoine Lamontagne | Portfolio";
  }, []);

    return (
        <div>
            <Header activeTab={activeTab} onTabChange={handleTabChange} />
            <div>
                {activeTab === 'home' && <Home />}
                {activeTab === 'cv' && <CV />}
                {activeTab === 'about' && <About />}
                {activeTab === 'contact' && <Contact />}
            </div>
            <Footer activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
    );
}

export default App;
