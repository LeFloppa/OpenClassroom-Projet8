import React from 'react';
import './card.scss';
import logementsData from '../../data/logements.json';

const Card = () => {
  return (
    <div className="gallery">
      <div className="gallery-grid">
        {logementsData.map((logement) => (
          <div className="gallery-item" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;