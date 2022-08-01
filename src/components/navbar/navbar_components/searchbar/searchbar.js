import React from "react";

import loupe from './imgs/loupe.png';

import './searchbar.css';

const Searchbar = () => {
    return(
        <div className="navbar-search">
            <input type="text"/>
            <button><img src={loupe} className="loupe-icon" alt="loop icon" /></button>
        </div>
    )
}

export default Searchbar;