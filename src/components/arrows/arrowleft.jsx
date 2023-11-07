import React from 'react';
import arrowLeftImage from '../../assets/arrow_left.png';

const ArrowLeft = ({ onClick }) => {
  return (
    <img
      className="arrow arrow_left"
      src={arrowLeftImage}
      alt="arrow-left"
      onClick={onClick}
    />
  );
};

export default ArrowLeft;