import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    const [activeTab, setActiveTab] = useState('projects');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header activeTab={activeTab} onTabChange={handleTabChange} />
            <div>
                {activeTab === 'home' && <Home />}
                {activeTab === 'projects' && <ProjectList />}
                {activeTab === 'about' && <About />}
                {activeTab === 'contact' && <Contact />}
            </div>
        </div>
    );
}

export default App;
