import React from 'react';

import './footer.scss';
import logo from '../../assets/LOGO_footer.png';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Footer Logo" />
      </div>
      <div className="footer-text">
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
};

export default FooterComponent;