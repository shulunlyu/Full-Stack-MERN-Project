import React from 'react';

import { useState } from 'react';

import "./InformationAcc.css";

function InformationAcc() {
    const [showDivAcc, setShowDivAcc] = useState(false);

    const showClassAcc = showDivAcc ? '' : "info-acc--open";

    return (
        <div className='info'>
            <div className='info-title'>
                <h2>Information</h2>
            </div>

            <div className="info-nav">

                <button className='info-button-acc'
                    aria-label={showDivAcc ? "Close Menu" : "Open Menu"}
                    onClick={() => {
                        setShowDivAcc(!showDivAcc);
                    }}
                >Accessibility</button>
                <div className={`info-acc ${showClassAcc}`}>
                    <p>We are committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. <br></br><br></br>
                        We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines. <br></br>
                    </p>
                </div>

                <div className='info-hint'>
                    <b>Click <a href="/">here</a> to go back home &gt;&gt;&gt;</b>
                </div>
            </div>
        </div>
    );
}

export default InformationAcc;