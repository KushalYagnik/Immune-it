import React, { Component } from 'react';
import './Login.scss';
import Logo from '../../components/Logo/Logo';
import {Link} from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <form className="login__wrapper">
                    <div className="login__greeting">
                        <Logo />
                        {/* <img className="login__logo" src="../../assets/Immune-it_cropped.png" alt="login__logo"/> */}
                        <h2 className="login__title">Login</h2>
                        <p className="login__text">Please login to access the app</p>
                    </div>
                    <div className="login__inputs">
                        <input type="email" className="login__email input" placeholder="Email"/>
                        <input type="password" className="login__password input" placeholder="Password"/>
                    </div>
                    <div className="login__CTAs">
                        <button className="login__login">Login</button>
                        <Link to="/signup">
                            <button className="login__signup">Sign Up</button>
                        </Link>
                    </div>
                </form>
                <div className="login__lang">
                    <button className="login__eng">English</button>
                    <button className="login__fra">Français</button>
                </div>
            </div>
        )
    }
}

export default Login
