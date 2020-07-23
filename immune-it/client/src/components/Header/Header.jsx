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
                    <Link to="/" className="header__menu-link">Home</Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/records" className="header__menu-link">My Records</Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/create" className="header__menu-link">Create Record</Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/about" className="header__menu-link">About</Link>
                </li>
                <li className="header__menu-item">
                    <Link to="/knowledge" className="header__menu-link">Knowledge Centre</Link>
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
