import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';
import CardItem from '../carditem/carditem';
import logementsData from '../../data/logements.json';

const Card = () => {
  return (
    <div className="gallery">
      <div className="gallery-grid">
        {logementsData.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
          <div className="card-container">
            <CardItem logement={logement} />
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;