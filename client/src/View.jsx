import React from 'react';

import mountain from "./images/mountain.jpg";
import sand from "./images/sand.jpg";
import tree from "./images/tree.jpg";

import "./View.css";

function View(){
    return(
        <div className="cards-views">
            <div className="cards-view">
                <div className="cards-view-part">
                <h2>Mountain</h2>
                <img
                src={mountain}
                className="cards-view-mountain"
                alt="Green mountain in Hawaii"
                />
                </div>
                <div className="cards-view-part">
                <h2>Sand</h2>
                <img
                src={sand}
                className="cards-view-sand"
                alt="Beautiful sand in Hawaii"
                />
                </div>
            </div>
            <div className="cards-view">
                <h2>Tree</h2>
                <img
                src={tree}
                className="cards-view-tree"
                alt="Tress in Hawaii beach"
                />
            </div>

        </div>
    );
}

export default View;