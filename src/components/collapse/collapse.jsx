import React from 'react';
import './collapse.scss';
import ArrowIcon from './arrow'; 

const Collapse = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? 'open' : 'close'}`}>
      <div className="collapse-header" onClick={onClick}>
        <h3>{title}</h3>
        <ArrowIcon
          className={`arrow ${isOpen ? 'open' : 'close'}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'close'}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
