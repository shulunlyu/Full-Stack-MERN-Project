import React from 'react';

import GlobalFooter from "./GlobalFooter";

import "./Footer.css";

function Footer( { onFooter } ){
    return (
        <footer className="footer">
            <GlobalFooter onFooter={ onFooter } className="footer__nav"/>
        </footer>
    );
}

export default Footer;