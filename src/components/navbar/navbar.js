import React, { useState, useEffect } from 'react';

import Logo from './navbar_components/logo/logo';
import Searchbar from './navbar_components/searchbar/searchbar.js';
import NavBarItems from './navbar_components/navbar_items/navbar_items.js';

import './navbar.css';
import './navbar_mobile.css';

let viewport_width = window.innerWidth;
let v_w;

(viewport_width < 1100) ? v_w = true : v_w = false;

const NavBar = () => {
    const [mobile, setMobile] = useState(v_w);
    const [sidebar, setSidebar] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1100) {
            setMobile(true);
          } else {
            setMobile(false);
          }
        }
    
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
      })
    
    return(
        <>
            <div className="nav">
                <div className="navbar">
                    <div className="navbar-box">
                        <div className="navbar-box-logo" onClick={() => setSidebar(true)}>
                            <Logo />
                        </div>
                        {!mobile && (
                            <>
                            <Searchbar />
                            <NavBarItems />
                            </>
                        )}
                        {mobile && (
                            sidebar ? (
                                <div onClick={() => setSidebar(!sidebar)}>
                                    <p>E</p>
                                </div>
                            ) : (
                                <>
                                    <div onClick={() => setSidebar(!sidebar)}>
                                        <p>A</p>
                                    </div>
                                    <div className="navbar_mobile">
                                        <Searchbar />
                                        <div onClick={() => setSidebar(!sidebar)}>
                                            <NavBarItems />
                                        </div>
                                    </div>
                                </>
                            )
                        )}
                    </div>
                </div>
            </div>
      </>
    )
}

export default NavBar;