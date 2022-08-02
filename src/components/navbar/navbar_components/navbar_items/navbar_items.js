import React from "react";

import { Link } from 'react-router-dom';

import './navbar_items.css';

const NavBarItems = () => {
    return(
        <div className="navbar-elems">
            <Link to='/artists'>
                <p>
                    Artists
                </p>
            </Link>
            <Link to='/albums'>
                <p>
                    Albums
                </p>
            </Link>
            <Link to='/'>
                <p>
                    Playlists
                </p>
            </Link>
        </div>
    )
}

export default NavBarItems;