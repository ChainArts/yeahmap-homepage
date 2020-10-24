import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="app-desktop-menu">
            <ul className="menu">
                <li><NavLink to="/submit" activeClassName="current-page-item">SUBMISSION</NavLink></li>
                <li><NavLink to="/who" activeClassName="current-page-item">WHO</NavLink></li>
                <li><NavLink to="/socials" activeClassName="current-page-item">SOCIALS</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar