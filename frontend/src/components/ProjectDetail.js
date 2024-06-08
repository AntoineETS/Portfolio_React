import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
    const { id } = useParams(); // Utilisation de useParams pour obtenir l'ID du projet depuis l'URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Exemple de requête fetch pour récupérer les détails d'un projet spécifique
        fetch(`https://github.com/AntoineETS`)
            .then((response) => response.json())
            .then((data) => setProject(data))
            .catch((error) => console.error('Error fetching project details:', error));
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Project URL: <a href={project.url}>{project.url}</a></p>
        </div>
    );
}

export default ProjectDetail;
