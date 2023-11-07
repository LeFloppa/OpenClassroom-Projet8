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
          className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/A-Propos"
          className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderComponent;