import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';
// import Nav from '../Nav/Nav';

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo" id="logo">
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
            {/* <Nav/> */}
            <ul className="header__menu">
                <li className="header__menu-item">
                    <Link to="/">
                       <a href="#" className="header__menu-link">Home</a>
                    </Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/records">
                        <a href="#" className="header__menu-link">My Records</a>
                    </Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/about">
                        <a href="#" className="header__menu-link">About</a>
                    </Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/knowledge">
                        <a href="#" className="header__menu-link">Knowledge Centre</a>
                    </Link>
                </li>
            </ul>
            <div className="header__auth">
                <Link to="/login">
                    <button className="header__auth-logout">Log out</button>
                </Link>
                {/* <button className="header__auth-register">Create Account</button> */}
            </div>
        </div>
    )
}
