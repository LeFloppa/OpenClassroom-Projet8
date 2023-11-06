import data from '../data/logements.json';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        setLogements(data);
    }, []);

    return (
        <div>
            <h1>Accueil</h1>
            {logements.map(logement => (
                <div key={logement.id}>
                    <h2>{logement.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default HomePage;