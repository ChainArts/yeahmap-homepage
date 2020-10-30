import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return(
        <header>
            <div className="header-cont">
                <div className="row space-between">
                    <div className="col">
                        <div className="yeahmap-logo" ><NavLink to="/" activeClassName=""><img src="yeahmap.png" alt="Home"/></NavLink></div>
                    </div>
                    <div className="col menu">

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header