import React from 'react';

import { useState } from 'react';

import "./InformationContact.css";

function InformationContact() {
    const [showDivContact, setShowDivContact] = useState(false);

    const showClassContact = showDivContact ? '' : "info-contact--open";

    return (
        <div className='info'>
            <div className='info-title'>
                <h2>Information</h2>
            </div>

            <div className="info-nav">

                <button className='info-button-contact'
                    aria-label={showDivContact ? "Close Menu" : "Open Menu"}
                    onClick={() => {
                        setShowDivContact(!showDivContact);
                    }}
                >Contact Us</button>
                <div className={`info-contact ${showClassContact}`}>
                    <p><b>From the U.S.</b><br></br><br></br>
                        Hawaii Visitors and Convention Center<br></br>
                        2270 Kalākaua Avenue, Suite 801<br></br>
                        Honolulu, HI 96815<br></br>
                        From the U.S. <b>(1-(206)467-5480)</b><br></br>
                        Email: <b>info@hvcb.org</b><br></br>
                    </p>
                </div>

                <div className='info-hint'>
                    <b>Click <a href="/">here</a> to go back home &gt;&gt;&gt;</b>
                </div>
            </div>
        </div>
    );
}

export default InformationContact;