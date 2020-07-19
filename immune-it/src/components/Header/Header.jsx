import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
// import Nav from '../Nav/Nav';

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo" id="logo">
                <Logo/>
            </div>
            {/* <Nav/> */}
            <ul className="header__menu">
                <li className="header__menu-item"><a href="#" className="header__menu-link">Home</a></li>
                <li className="header__menu-item"><a href="#" className="header__menu-link">My Records</a></li>
                <li className="header__menu-item"><a href="#" className="header__menu-link">About</a></li>
                <li className="header__menu-item"><a href="#" className="header__menu-link">Knowledge Centre</a></li>
            </ul>
            <div className="header__auth">
                <button className="header__auth-login">Login</button>
                <button className="header__auth-register">Create Account</button>
            </div>
        </div>
    )
}
