import React, { Component } from 'react'
import './Header.scss';
import Logocomp from '../Logo/Logo';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: localStorage.getItem("token") ? true : false
        };
    }

    componentDidMount() {
        this.setState({ loggedIn: localStorage.getItem("token") ? true : false });
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div className="header">
                    <div className="header__logo" id="logo-wrap">
                        <Link to="/"><Logocomp/></Link>
                    </div>
                    <div className="header__container">
                        <ul className="header__menu">
                            <li className="header__menu-item">
                                <Link to="/" className="header__menu-link">Home</Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/records" className="header__menu-link">Records</Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/about" className="header__menu-link">About</Link>
                            </li>
                        </ul>
                        <div className="header__auth">
                            <Link to='/'><Logout /></Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="header">
                    <div className="header__logo" id="logo">
                        <Link to="/"><Logocomp/></Link>
                    </div>
                    <div className="header__auth">
                        <Link to='/'>Login</Link>
                    </div>
                </div>
            )
        }
    }
}

export default Header
