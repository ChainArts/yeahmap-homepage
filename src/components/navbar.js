import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="main-nav">
            <ul className="menu-list">
                <NavLink to="/submit" exact activeClassName="current-page-item">
                    <li>SUBMISSION</li>
                </NavLink>
                <NavLink to="/who" activeClassName="">
                    <li>WHO</li>
                </NavLink>
                <NavLink to="/socials" activeClassName="">
                    <li>SOCIALS</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar