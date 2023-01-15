import React from 'react';
import { useState } from 'react';

import "./InformationPolicy.css";

function InformationPolicy() {
    const [showDivPolicy, setShowDivPolicy] = useState(false);

    const showClassPolicy = showDivPolicy ? '' : "info-policy--open";

    return (
        <div className='info'>
            <div className='info-title'>
                <h2>Information</h2>
            </div>

            <div className="info-nav">

                <button className='info-button-policy'
                    aria-label={showDivPolicy ? "Close Menu" : "Open Menu"}
                    onClick={() => {
                        setShowDivPolicy(!showDivPolicy);
                    }}
                >Private Policy</button>
                <div className={`info-policy ${showClassPolicy}`}>
                    <p>We know that you value your privacy. <br></br><br></br>
                        That is why we want to make certain that you understand our policies and practices regarding your personal information.
                        This Privacy Policy explains the type of personal information we collect, what we do with it, what we don't do with it, and how we keep it safe.
                        By visiting this website, you are accepting the practices described in this Privacy Policy.<br></br><br></br>
                        In order for us to create your personalized website experience and/or to send you a holiday planner, you will need to provide us with some personal information about yourself.
                        The information that we collect includes: (1) your name; (2) your e-mail address; (3) the island you plan to visit; (4) the activities that interest you.</p>
                </div>

                <div className='info-hint'>
                    <b>Click <a href="/">here</a> to go back home &gt;&gt;&gt;</b>
                </div>
            </div>
        </div>
    );
}

export default InformationPolicy;