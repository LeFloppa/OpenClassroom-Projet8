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
          to="/home"
          activeclassname="active"
          className="nav__link"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
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