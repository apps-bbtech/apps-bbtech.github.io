import React from 'react';
import logo_long from '../images/logo_long_transparent.png';
import style from './nav.module.css';

const Nav = () => {
    return(
        <nav className={style.nav}>
            <img className={style.logoLong} src={logo_long} alt="bbtech long logo"/>
            <ul className={style.routes}>
                <li className={style.route}>Home</li>
                <li className={style.route}>Apps</li>
                <li className={style.route}>About Us</li>
                <li className={style.route}>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;