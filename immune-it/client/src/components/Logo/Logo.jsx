import React from 'react';
import './Logo.scss';
import logo from '../../assets/Immune-It_cropped.png';

export default function Logo() {
    return (
        <div className="logo-wrapper">
            <img src={logo} alt="Logo"/>
        </div>
    )
}
