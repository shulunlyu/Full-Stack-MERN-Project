import React from 'react';

import { useId } from "react";
import HomeForm from "./HomeForm";

import "./Home.css";


function Home(){
    const id = useId();

    return(
        <div className="homepage">
        <div className="introduction">
            <h2 className="introduction-header">Welcome to Explore<br></br> in Hawaii!</h2>
            <ul className="introduction-islands">
                <li>
                    <a href="https://en.wikipedia.org/wiki/Oahu">Oahu</a>
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Maui">Maui</a>
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Hawaii_(island)">Hawaiʻi (Big Island)</a>
                </li>
                <li>
                    <a href="https://en.wikipedia.org/wiki/Kauai">Kauai</a>
                </li>
            </ul>
        </div>
        <div className="registration">
            <h2 className="registration-header">Register to the Latest News!</h2>
            <p className="hint">Hint: <span></span> is required. Please fill in the form with right pattern.</p>
            <HomeForm/>
        </div>
        </div>
    );
}

export default Home;