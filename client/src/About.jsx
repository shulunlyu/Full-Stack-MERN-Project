import React from 'react';
import "./About.css";

function About() {
    return (
        <div className="about">
            <div className="tabs">

                <input type="radio" name="tabs" className="tabs-input" id="tabone" checked="checked" />
                <label for="tabone">Overview</label>
                <div className="tab">

                    <h2>Overview</h2>
                    <p>
                        Hawaii is a state in the Western United States, located in the Pacific Ocean about 2,000 miles (3,200 km) from the U.S. mainland.<br></br><br></br>
                        It is the only U.S. state outside North America, the only state that is an archipelago, and the only state geographically located within the tropics.

                        Hawaii comprises nearly the entire Hawaiian archipelago, 137 volcanic islands spanning 1,500 miles (2,400 km) that are physiographically and ethnologically part of the Polynesian subregion of Oceania.
                        The state's ocean coastline is consequently the fourth-longest in the U.S., at about 750 miles (1,210 km).<br></br><br></br>
                        The eight main islands, from northwest to southeast,
                        are <u><b>Niʻihau</b></u>, <u><b>Kauaʻi</b></u>, <u><b>Oʻahu</b></u>, <u><b>Molokaʻi</b></u>, <u><b>Lānaʻi</b></u>, <u><b>Kahoʻolawe</b></u>, <u><b>Maui</b></u>, and <u><b>Hawaiʻi</b></u>—the last of these, after which the state is named, is often called the "Big Island" or "Hawaii Island" to avoid confusion with the state or archipelago.
                    </p>

                </div>

                <input type="radio" name="tabs" className="tabs-input" id="tabtwo" />
                <label for="tabtwo">Weather</label>
                <div className="tab">

                    <h2>Weather</h2>
                    <p>Weather in The Hawaiian Islands is very consistent, with only minor changes in temperature throughout the year.<br></br><br></br>
                        There are really only two seasons in Hawaii: summer (kau) from May to October and winter (hoʻoilo) from November to April.
                        The average daytime summer temperature at sea level is <u><b>85° F (29.4° C)</b></u>, while the average daytime winter temperature is <u><b>78° (25.6° C)</b></u>.
                        Temperatures at night are approximately 10° F lower than the daytime.</p>

                </div>

                <input type="radio" name="tabs" className="tabs-input" id="tabthree" />
                <label for="tabthree">Cuisine</label>
                <div className="tab">

                    <h2 id="Tips">Cuisine</h2>
                    <p>
                    The cuisine of Hawaii is a fusion of many foods brought by immigrants to the Hawaiian Islands, including the earliest Polynesians and Native Hawaiian cuisine, and American, Chinese, Filipino, Japanese, Korean, Polynesian, Puerto Rican, and Portuguese origins. <br></br><br></br>
                    Plant and animal food sources are imported from around the world for agricultural use in Hawaii. Poi, a starch made by pounding taro, is one of the traditional foods of the islands. <br></br><br></br>
                    Many local restaurants serve the ubiquitous plate lunch, which features two scoops of rice, 
                    a simplified version of American macaroni salad and a variety of toppings including hamburger patties, a fried egg, and gravy of a loco moco, Japanese style tonkatsu or the traditional lūʻau favorites, including kālua pork and laulau. 
                    </p>

                </div>

                <input type="radio" name="tabs" className="tabs-input" id="tabfour" />
                <label for="tabfour">Travel Tips</label>
                <div className="tab">

                    <h2 id="Tips">Travel Tips</h2>
                    <p>
                        <u><b>Ocean Safety:</b></u><br></br>
                        Beneath the ocean's beautiful blue surface, conditions can be unpredictable and even dangerous. Ocean safety experts recommend checking in with lifeguards before you enter the water - they'll be happy to tell you about potential hazards like rip currents, hidden rocks and shorebreaks.<br></br><br></br>
                        <u><b>Land Safety:</b></u><br></br>
                        Hawaii's mountains, valleys, waterfalls and canyons are amazing to see up close, and to keep them that way, we listen to land safety experts' tips to minimize our impact on the trails. When you learn about land access, trail protocol and weather preparedness, you'll be ready to enter Hawaii's awe-inspiring wilderness.<br></br><br></br>
                        <u><b>Culture:</b></u><br></br>
                        The Hawaiian Islands are like no place else - and experiencing them fully means having a completely different mindset. You'll gain a deeper appreciation for the people and the place that, together, make Hawaii a truly unique destination.
                    </p>
                    
                </div>

            </div>
        </div>
    );
}

export default About;