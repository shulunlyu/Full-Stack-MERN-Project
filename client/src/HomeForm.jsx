import React from 'react';

import { useState } from 'react';
import { useId } from "react";
import { useRef } from 'react';

import "./HomeForm.css";

function HomeForm() {
  const id = useId();
  const modalRef = useRef(null);

  // Form Validation
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };
  const handleChangeConfirm = event => {
    setConfirm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!name) {
      setNameError('This field is required.');
      // return;
    } else {
      setNameError('');
      // return;
    }

    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    if (confirm !== email) {
      setConfirmError('Please enter the same email address.');
    } else {
      setConfirmError('');
    }

    if (!nameError & !emailError & !confirmError){
      modalRef.current.showModal();
    }

  };

  // Define state hook for selected option
  const [selected, setSelected] = useState('');

  // Define other state variables, the value of the "other" field
  const [otherValue, setOtherValue] = useState('');

  return (
    <form onSubmit={handleSubmit} className="register">

      <label htmlFor={`${id}-name`} className="register-name">
        <span>Name: </span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          id={`${id}-name`}
          size="46"
        />
      </label>
      {nameError && <p className='register-error'>{nameError}</p>}
      <br></br>

      <label htmlFor={`${id}-email`} className="register-email">
        <span>Email: </span>
        <input
          name="email"
          value={email}
          onChange={handleChangeEmail}
          id={`${id}-email`}
          size="46"
        />
      </label>
      {emailError && <p className='register-error'>{emailError}</p>}
      <br></br>

      <label htmlFor={`${id}-confirm`} className="register-confirm">
        <span>Confirm Email: </span>
        <input
          name="confirm"
          value={confirm}
          onChange={handleChangeConfirm}
          id={`${id}-confirm`}
          size="37"
        />
      </label>
      {confirmError && <p className='register-error'>{confirmError}</p>}
      <br></br>

      <label htmlFor={`${id}-choice`} className="register-choice">
        <span>Select Islands in Hawaii to Explore: </span>
        <select
          name="island"
          id={`${id}-choice`}
          title="Please Select The Island"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}>
          <option value="" selected>--Please select--</option>
          <option value="1">Oahu</option>
          <option value="2">Maui</option>
          <option value="3">Big Island</option>
          <option value="4">Kauai</option>
          <option value="5">Other</option>
        </select>
      </label>

      {/* Complex Form Interation */}
      {selected === '5' && (
        <div className='register-other'>
          <input
            type="text"
            placeholder="Enter other islands to explore here"
            value={otherValue}
            size="55"
            onChange={(e) => setOtherValue(e.target.value)}
          />
        </div>
      )}

      <br></br>

      <dialog className="modal-home" ref={modalRef}>
        <div className='modal-home__container'>
          <p className='modal-home__title'>Congratulations! Your request is submitted!</p>
          <button className="modal-home__cancel"><a href="/.html" className='modal-home__cancel-click'>Click to Exit!</a></button>
        </div>
      </dialog>

      <div className="register-submit">
        <button
          type="submit"
          className="register-button"
        ><b>Register!</b></button>
      </div>
    </form>
  );
}

export default HomeForm;