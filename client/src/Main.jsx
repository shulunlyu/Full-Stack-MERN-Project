import React from 'react';
import { useState } from "react";

import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import View from './View';
import Experiences from "./Experiences";
import Food from "./Food";
import InformationTerms from "./InformationTerms";
import InformationAcc from "./InformationAcc";
import InformationContact from "./InformationContact";
import InformationPolicy from "./InformationPolicy";

import Media from './Media';

import "./Main.css";

function Main({ page }){

    return (
        <main id="main">
            { (page === '/') && <Home/> }
            { (page === '/about.html') && <About/> }
            { (page === '/view.html') && <View/> }
            { (page === '/experiences.html') && <Experiences/> }
            { (page === '/food.html') && <Food/> }
            { (page === '/media.html') && <Media/> }
            { (page === '/informationterms.html') && <InformationTerms/> }
            { (page === '/informationacc.html') && <InformationAcc/> }
            { (page === '/informationcontact.html') && <InformationContact/> }
            { (page === '/informationpolicy.html') && <InformationPolicy/> }
        </main>
    );
}

export default Main;