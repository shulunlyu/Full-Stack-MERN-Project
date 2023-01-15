import React from 'react';

import GlobalNav from './GlobalNav';
import aloha from './images/aloha.jpg';

import './Header.css';

function Header( {onNav} ){
    return (
    <header className="header">
      <a href="#main" className="skip-link">Skip to content</a> 
      <a href="/">
      <img
        src={aloha}
        className="header__logo"
        alt="Colorful aloha boats"
      />
      </a>
      <h1 className="header__title">
        <span>Aloha!</span> Travel in Hawaii
      </h1>
      <GlobalNav onNav={ onNav } className="header__nav"/>
    </header>

    );
}

export default Header;