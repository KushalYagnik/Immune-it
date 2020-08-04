import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.scss';
import Logo from '../../components/Logo/Logo';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.apiURI = process.env.API_URI || 'http://localhost:8080'


        this.state = {
            email: '',
            password: '',
            loggedIn: localStorage.getItem("token") ? true : false
        };
    }

    updateEmail(e) { this.setState({ email: e.target.value }) };
    updatePassword(e) { this.setState({ password: e.target.value }) };

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post(`${this.apiURI}/users/login/`, obj)
        // axios.post(`/users/login/`, obj)
        // axios.post(`api/users/login/`, obj)
            .then(res => {
                // window.alert('Login successful');
                localStorage.setItem("token", res.data.token);
                this.setState({ loggedIn: true });
            });
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <Redirect to={"/home"} />
            );
        }
        return (
            <div className="container_login">
                {/* <Header /> */}
                <div className="login">
                    <div className="login__description-wrap">
                        <h2 className="login__description"> `immune-it` is an app that empowers users to track their immunization history...digitally!</h2>
                    </div>
                    <form className="login__wrapper" onSubmit={this.onSubmit}>
                        <div className="login__greeting">
                            <div className="login__logo"><Logo /></div>
                            <h2 className="login__title">Login</h2>
                            <p className="login__text">Please login to access the app</p>
                        </div>
                        <div className="login__inputs">
                            <input type="email" className="login__email input" placeholder="Email" value={this.state.email} onChange={this.updateEmail} />
                            <br /><input type="password" className="login__password input" placeholder="Password" value={this.state.password} onChange={this.updatePassword} />
                        </div>
                        <div className="login__CTAs">
                            <button type="submit" className="login__login">Login</button><br />
                            <Link to="/signup">
                                <button className="login__signup">Sign Up</button>
                            </Link>
                        </div>
                        <div className="login__lang">
                            <button className="login__eng langInput">English</button>
                            <button className="login__fra langInput">Français</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
