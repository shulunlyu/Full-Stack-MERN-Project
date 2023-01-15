import React from 'react';

function NavBar( {setPage,onNav} ){

    return(
        <div>
            <a href="/"
            onClick={ (e) => onNav(e, 'Home') }
            >Home</a>
            <a href="/"
            onClick={ (e) => onNav(e, 'About') }
            >About</a>
            <a href="/"
            onClick={ (e) => onNav(e, 'View') }
            >View</a>
            <a href="/"
            onClick={ (e) => onNav(e, 'Experiences') }
            >Experiences</a>
            <a href="/"
            onClick={ (e) => onNav(e, 'Food') }
            >Food</a>
            <a href="/"
            onClick={ (e) => onNav(e, 'Media') }
            >Media</a>
        </div>
    );
}

export default NavBar;