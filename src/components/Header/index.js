import React from 'react';
import CatLogo from 'src/assets/img/CatLogo.svg';
import './index.scss';

function Header() {
    return(
        <div className="header">
            <img src={CatLogo} className="header-logo" alt="logo" />
            <h1 className="header-title">Cat Universe</h1>
        </div>


    );
}
export default Header;
