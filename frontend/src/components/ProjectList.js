import React, { useState, useEffect } from 'react';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Exemple de requête fetch pour récupérer des données depuis une API
        fetch('https://api.example.com/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
