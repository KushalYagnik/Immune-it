import React, { Component } from 'react'
import './Header.scss';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Login from '../../pages/Login/Login';
import Logout from '../Logout/Logout';
// import Nav from '../Nav/Nav';

export class Header extends Component {
    constructor(props){
        super (props);

        // this.logout = this.logout.bind(this);
        this.state = {
            loggedIn: localStorage.getItem("token") ? true : false
        };
    }

    componentDidMount() {
        console.log(this.state.loggedIn);
        this.setState({loggedIn: localStorage.getItem("token") ? true : false});
    }

    // async logout() {
    //     const response = await axios.post('http://localhost:8080/users/me/logout', null, {
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem("token") //the token is a variable which holds the token
    //         }
    //     });
    //     console.log(response);
    //     if(response) {
    //         localStorage.clear();
    //         this.setState({loggedIn: false});
    //     }
    // }

    render() {
        console.log("Header: " + localStorage.getItem("token"))
        if(this.state.loggedIn) {
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
                    {/* <li className="header__menu-item">
                        <Link to="/create" className="header__menu-link">Create Record</Link>
                    </li> */}
                    <li className="header__menu-item">
                        <Link to="/about" className="header__menu-link">About</Link>
                    </li>   
                </ul>
                <div className="header__auth">           
                    <Link to='/'><Logout/>
                        {/* <button className="header__auth-logout" onClick={(logout)}>Log out</button> */}
                    </Link>     
                </div>
            </div>
            )
        } else {
            return (<div className="header">
                <div className="header__logo" id="logo">
                    <Link to="/"><Logo/></Link>
                </div>
                {/* <Nav/> */}
                <div className="header__auth">           
                        <Link to='/'>Login
                            {/* <button className="header__auth-logout" onClick={(logout)}>Log out</button> */}
                        </Link>     
                </div></div>)
        }
    }
}

export default Header
