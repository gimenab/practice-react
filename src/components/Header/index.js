/* eslint-disable react/prop-types */
import React from 'react';
import CatLogo from 'src/assets/img/CatLogo.svg';

import './index.scss';

function Header({ children }) {
  return (

    <div className="flex">
      <img src={CatLogo} className="header-logo" alt="logo" />
      {children}
    </div>


  );
}
export default Header;
