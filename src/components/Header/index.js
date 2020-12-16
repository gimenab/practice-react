import React from 'react';
import CatLogo from 'src/assets/img/CatLogo.svg';
import PageTitle from '../PageTitle';
import './index.scss';

function Header() {
  return (
    <div className="header">
      
      <img src={CatLogo} className="header-logo" alt="logo" />
      <PageTitle />
    </div>


  );
}
export default Header;
