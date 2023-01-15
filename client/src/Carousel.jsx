import React from 'react';

import sorbet from './images/sorbet.jpg';
import papaya from './images/papaya.jpg';
import drinks from './images/drinks.jpg';
import fruits from './images/fruits.jpg';

import "./Carousel.css";

function Carousel() {
    return (
        <div className="container">
            <section className="carousel" aria-label="Gallery">
                <ul className="carousel__viewport">
                    <li id="carousel__slide1"
                        className="carousel__slide">

                        <div className="carousel__snapper">
                            <a href="#carousel__slide4"
                                className="carousel__prev">Go to last slide</a>
                            <div className='carousel__image'>
                                <img src={sorbet} />
                            </div>
                            <a href="#carousel__slide2"
                                className="carousel__next">Go to next slide</a>
                        </div>

                    </li>
                    <li id="carousel__slide2"
                        className="carousel__slide">

                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide1"
                            className="carousel__prev">Go to previous slide</a>
                            <div className='carousel__image'>
                                <img src={papaya} />
                            </div>
                        <a href="#carousel__slide3"
                            className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide3"
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide2"
                            className="carousel__prev">Go to previous slide</a>
                            <div className='carousel__image'>
                                <img src={drinks} />
                            </div>
                        <a href="#carousel__slide4"
                            className="carousel__next">Go to next slide</a>
                    </li>
                    <li id="carousel__slide4"
                        className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide3"
                            className="carousel__prev">Go to previous slide</a>
                            <div className='carousel__image'>
                                <img src={fruits} />
                            </div>
                        <a href="#carousel__slide1"
                            className="carousel__next">Go to first slide</a>
                    </li>
                </ul>
                <aside className="carousel__navigation">
                    <ul className="carousel__navigation-list">
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide1"
                                className="carousel__navigation-button">Go to slide 1</a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide2"
                                className="carousel__navigation-button">Go to slide 2</a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide3"
                                className="carousel__navigation-button">Go to slide 3</a>
                        </li>
                        <li className="carousel__navigation-item">
                            <a href="#carousel__slide4"
                                className="carousel__navigation-button">Go to slide 4</a>
                        </li>
                    </ul>
                </aside>
            </section>

        </div>
    );
}

export default Carousel;
