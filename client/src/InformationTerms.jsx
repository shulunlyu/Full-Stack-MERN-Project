import React from 'react';
import { useState } from 'react';

import "./InformationTerms.css";

function InformationTerms(){
    const [showDivTerms, setShowDivTerms] = useState(false);

    const showClassTerms = showDivTerms ? '' : "info-terms--open";

    return (
        <div className='info'>
            <div className='info-title'>
                <h2>Information</h2>
            </div>
        
        <div className="info-nav">

            <button className='info-button-terms'
            aria-label={showDivTerms ? "Close Menu" : "Open Menu"}
            onClick={ ()=> {
                setShowDivTerms(!showDivTerms);}}
            >Terms &amp; Conditions</button>
            <div className={`info-terms ${showClassTerms}`}>
                <p>
                Welcome to our website!<br></br><br></br>
                If you continue to browse and use this webiste, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our private policy.<br></br>
                If you disagree with any part of these terms and conditions, please do not use our website.<br></br><br></br>
                The use of this website is subject to the following terms of use:<br></br>
                1. The content of the pages of this website is for your general information and use only.<br></br>
                2. It is subject to change without notice.<br></br>
                3. This website may also include links to other websites. We have no responsibility for the content of the linked website(s).
                </p>
            </div>

            <div className='info-hint'>
                    <b>Click <a href="/">here</a> to go back home &gt;&gt;&gt;</b>
                </div>

        </div>
        </div>
    );

}

export default InformationTerms;