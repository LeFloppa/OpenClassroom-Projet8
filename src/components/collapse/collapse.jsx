import React from 'react';
import './collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? 'open' : 'close'}`}>
      <div className="collapse-header" onClick={onClick}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
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