import React from 'react';
import './Logo.scss';
import logo from '../../assets/immuneit_logo_crp.png';

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <img id="logo" src={logo} alt="Logo"/>
        </div>
    )
}
