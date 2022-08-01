import React from "react";

import Searchbar from '../searchbar/searchbar.js';
import NavBarItems from '../navbar_items/navbar_items.js';


import './togglemenu.css';

const ToggleMenu = () => {
    return(
        <div className="navbar-list">
            <Searchbar />
            <NavBarItems />
        </div>
    )
}

export default ToggleMenu;