import React from 'react';
import './card.scss';
import CardItem from '../carditem/carditem';
import logementsData from '../../data/logements.json';

const Card = () => {
  return (
    <div className="gallery">
      <div className="gallery-grid">
        {logementsData.map((logement) => (
          <CardItem 
          logement = {logement}
          key = {logement.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;