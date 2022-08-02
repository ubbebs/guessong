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

    const setBgFull = () => {
        document.querySelector('.navbar').style.background = 'linear-gradient(rgba(17,17,17,1), rgba(17,17,17,1)';
    }

    const setBgGradient = () => {
        document.querySelector('.navbar').style.background = 'linear-gradient(rgba(17,17,17,1), rgba(0,0,0,0)';
    }

    useEffect(() => {
        
        const nav = document.querySelector('.nav');
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                nav.classList.add('nav-hidden')
            } else {
                nav.classList.remove('nav-hidden')
            }

            lastScrollY = window.scrollY;
        })

        const handleResize = () => {
          if (window.innerWidth < 1301) {
            setMobile(true);
            document.querySelector('.closing-button').style.display = 'block';
          } else {
            setMobile(false);
            document.querySelector('.closing-button').style.display = 'none';
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
                        <div onClick={() => {
                            setSidebar(!sidebar)
                            setBgFull()
                        }}>
                            <div className='closing-button'>E</div>
                        </div>
                    </div>
                </div>
            </div>
            {mobile && (
                sidebar ? (
                    <> 
                    </>
                ) : (
                    <>
                        <div className="navbar_mobile">
                            <div onClick={() => {
                                setSidebar(!sidebar)
                                setBgGradient()
                            }}>
                                <div>A</div>
                            </div>
                            <Searchbar />
                            <div onClick={() => setSidebar(!sidebar)}>
                                <NavBarItems />
                            </div>
                        </div>
                    </>
                )
            )}
      </>
    )
}

export default NavBar;