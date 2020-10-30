import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header>
            <div className="header-cont">
                <div className="row space-between">
                    <div className="col">
                        <div className="yeahmap-logo" ><NavLink to="/" activeClassName=""><img src="yeahmap.png" alt="Home"/></NavLink></div>
                    </div>
                    <div className="col">
                        <div className="hamburger-menu" onClick={e => setIsOpen(!isOpen)}>
                            <div className={ isOpen ? "menu-toggle-icon menu-toggle-open" : "menu-toggle-icon menu-toggle-closed"}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header