import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return(
        <header>
            <div className="header-cont">
                <div className="row space-between">
                    <div className="col">
                        <NavLink className="yeahmap-logo" to="/"><img src="yeahmap.png" alt=""/></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header