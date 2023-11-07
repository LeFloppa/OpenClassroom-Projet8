import React from 'react';
import './carditem.scss';

const CardItem = ({ logement }) => {
  return (
    <div className="gallery-item">
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
    </div>
  );
};

export default CardItem;