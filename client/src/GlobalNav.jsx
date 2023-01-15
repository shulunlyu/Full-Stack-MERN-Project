import React from 'react';

import MenuHeader from "./MenuHeader";

import { useState } from "react";

import './GlobalNav.css';
import './css-gg.css';

function GlobalNav({ className, onNav }){
    const [showMenu, setShowMenu] = useState(false);

    const list = MenuHeader.map( item => {
        return (
          <li className="global-nav__item" key={item.name}>
            <a 
            className="global-nav__link" 
            href={item.path}
            onClick= { onNav }
            >
              {item.name}
            </a> 
          </li>
        ); 
    });

    // const menuHtml = (        
    // );

    const showClass = showMenu ? 'global-nav__list--open' : "";

    return (
        <nav className={`global-nav ${className}`}>
            {/* Click the Menu button to show menu or not */}
            <button className="global-nav__button"
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
            onClick={ ()=> {
                setShowMenu(!showMenu);
            }}><i className="gg-menu"/></button>
            <ul className={`global-nav__list ${showClass}`}>
                { list }
            </ul>
            {/* if showMenu is true there will show menuHtml */}
            {/* {showMenu && menuHtml} */}
        </nav>
    );
}

export default GlobalNav;