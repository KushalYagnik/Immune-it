import React from 'react';
import './Logo.scss';
import logo from '../../assets/Immune-It2_revised.png';

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <img id="logo" src={logo} alt="Logo"/>
        </div>
    )
}
