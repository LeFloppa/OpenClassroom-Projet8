import React from 'react';
import './collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={onClick}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronUp}
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;