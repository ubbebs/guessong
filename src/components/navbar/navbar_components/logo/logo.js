import React from "react";

import { Link } from 'react-router-dom';

import './logo.css';

const Logo = () => {
    return(
        <div className="navbar-logo">
            <Link to='/'><span>G</span></Link>
        </div>
    )
}

export default Logo;