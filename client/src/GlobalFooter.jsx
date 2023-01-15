import React from 'react';

import MenuFooter from "./MenuFooter";

import "./GlobalFooter.css";

function GlobalFooter({ className, onFooter }){

    const list = MenuFooter.map( item => {
        return (
          <li className="global-footer__item" key={ item.name }>
            <a 
            className="global-footer__link" 
            href={ item.path }
            onClick= { onFooter }
            >
              { item.name }
            </a> 
          </li>
        ); 
    });

    return (
        <div className={`global-footer ${className}`}>
            <ul className="global-footer__list">
                { list }
            </ul>
        </div>
    );
}

export default GlobalFooter;