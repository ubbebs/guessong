import React from "react";

import { Link } from 'react-router-dom';

import './navbar_items.css';

const NavBarItems = () => {
    return(
        <div className="navbar-elems">
            <Link to='/artists'>
                <div>
                    Artists
                </div>
            </Link>
            <Link to='/albums'>
                <div>
                    Albums
                </div>
            </Link>
            <Link to='/'>
                <div>
                    Playlists
                </div>
            </Link>
        </div>
    )
}

export default NavBarItems;