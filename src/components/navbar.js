import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavMenu = {
    hidden: {y: -20, opacity: 0},
    open:{
        y: 0,
        opacity: 1,
        transition: {
            ease: [.14,.8,.4,1],
            duration: 0.8
        }
    }

}

const Navbar = () => {
    return(
        <motion.nav className="app-desktop-menu" variants = {NavMenu} initial="hidden" animate="open">
            <ul className="menu">
                <li><NavLink to="/submit" activeClassName="current-page-item">SUBMISSION</NavLink></li>
                <li><NavLink to="/who" activeClassName="current-page-item">WHO</NavLink></li>
                <li><NavLink to="/socials" activeClassName="current-page-item">SOCIALS</NavLink></li>
            </ul>
        </motion.nav>
    )
}

export default Navbar