import React from 'react';

import ExperiencesModal from "./ExperiencesModal";

import surf from "./images/surf.jpg";
import snorkel from './images/snorkel.jpg';
import parasail from './images/parasail.jpg';

import "./Experiences.css";

function Experiences(){
    return(
        <div className="cards">
        <div className="card">      
            <img src={surf} alt="A surfing man"/>
            <h2>Surfing</h2>
            <ExperiencesModal/>
            <p>If you dream of riding the waves, there’s no better place to learn how than right here in Hawaii, the birthplace of surfing.</p>
        </div>
        <div className="card">
            <img src={snorkel} alt="A man snorkeling with sharks"/>
            <h2>Snorkeling</h2>
            <ExperiencesModal/>
            <p>Come face to face with tropical fish, spotted eagle rays and green sea turtles on an underwater adventure in Hawaiʻi's 1,200 miles of coral reef.</p>      
        </div>
        <div className="card">
            <img src={parasail} alt="Two people going parasailing"/>
            <h2>Parasailing</h2>
            <ExperiencesModal/>
            <p>Lift off on a parasailing adventure and get a bird’s eye view of Hawaiʻi’s breathtaking coastline from up to 1,200 feet in the air. </p>
        </div>
        </div>
    );
}

export default Experiences;