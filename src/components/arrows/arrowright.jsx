import React from 'react';
import arrowRightImage from '../../assets/arrow_right.png';

const ArrowRight = ({ onClick }) => {
  return (
    <img
      className="arrow arrow_right"
      src={arrowRightImage}
      alt="arrow-right"
      onClick={onClick}
    />
  );
};

export default ArrowRight;