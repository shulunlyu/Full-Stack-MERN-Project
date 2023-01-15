import React from 'react';

import { useRef } from 'react';
import { useState } from 'react';

import "./ExperiencesModal.css";

function ExperiencesModal() {
    const modalRef = useRef(null);
    const modalRef2 = useRef(null);

    // Click button to close two modals
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        // Perform the first action
        setIsClicked(true);
        modalRef.current.close();
        modalRef2.current.close();
      }

    return (
        <div>
            {/* 1st modal window */}
            <dialog className="modal" ref={modalRef}>
                <p className='modal__title'><b>Register to the latest experiences!</b></p>
                <div className="ex-register-email">
                    <label className="ex-register__label">
                        <span className="ex-register-email__label">Email: </span><br></br>
                        <input name="email" type="text" className="ex-register-email__input" size="60" title="Please Enter Valid(@) Email Address" /><br></br>
                    </label>
                </div><br></br>
                <div className="ex-register-confirm">
                    <label className="ex-register__label">
                        <span className="ex-register-confirm__label">Confirm Email: </span><br></br>
                        <input name="confirm-email" type="text" className="ex-register-confirm__input" size="60" title="Please Confirm Valid(@) Email Address" /><br></br>
                    </label>
                </div><br></br>
                <div className='ex-register-radio'>
                    <label className='ex-register-label'>
                        <span className='ex-register-radio-label'>Select An Experience:</span>
                        <input name="radio" type="radio" value="surfing" />
                        <label>Surfing</label>
                        <input name="radio" type="radio" value="snorkeling" />
                        <label>Snorkeling</label>
                        <input name="radio" type="radio" value="parasailing" />
                        <label>Parasailing</label>
                    </label>
                </div><br></br>
                <div className="ex-register__button">
                    <button className="modal__submit" onClick={() => {
                        modalRef2.current.showModal();
                    }}>Submit</button>
                    <button className="modal__cancel" onClick={() => modalRef.current.close()}>Cancel</button>
                </div>
            </dialog>

            {/* 2nd modal window */}
            <dialog className="modal2" ref={modalRef2}>
                <div className='modal2__container'>
                <p className='modal2__title'>Congratulations! Your request is submitted!</p>
                <button className="modal2__cancel" onClick={handleClick}>Click to Exit!</button>
                </div>
            </dialog>

            <div className='modal__container'>
            <div className='modal__button'>
                <p><button
                    className="modal__open"
                    onClick={() => {
                        modalRef.current.showModal();
                    }}
                ><b>Register &#38; Explore</b> &gt;&gt;&gt; </button></p>
            </div>
            </div>
        </div>
    );
}

export default ExperiencesModal;