import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/LOGO.png';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <NavLink
          to="/Home"
          activeclassname="active"
          className="nav__link"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/A-Propos"
          activeclassname="active"
          className="nav__link"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderComponent;