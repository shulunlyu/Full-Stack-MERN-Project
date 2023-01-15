import React from 'react';

import "./Food.css";

import Carousel from "./Carousel";

function Food(){

    return(
        <div className="food">
        <div className="food-title">
            <h2>
            Take A Look at <b>Hawaiian</b> Style Food!
            </h2>
        </div>
        <Carousel/>
        </div>

    );
}

export default Food;