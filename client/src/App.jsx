import './App.css';
import React from 'react';
import { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [ page, setPage ] = useState('/');

  function onNav( event ){
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  } 

  function onFooter( event ){
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  } 

  return (
    <div className="app">
      <Header onNav={onNav}/>
      <Main page={page}/>
      <Footer onFooter={onFooter}/>
    </div>
  );
}

export default App;
