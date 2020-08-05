import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import Logo from '../../components/Logo/Logo';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.apiURI = process.env.REACT_APP_API_URI || 'http://localhost:8080'


        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    updateName(e) { this.setState({ name: e.target.value }) };
    updateEmail(e) { this.setState({ email: e.target.value }) };
    updatePassword(e) { this.setState({ password: e.target.value }) };

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        axios.post(`${this.apiURI}/users/`, obj)
            .then(res => {
                window.alert('Signup successful');
                this.setState({ 
                    name: '',
                    email: '',
                    password: ''
                 });
            });
    }

    render() {
        return (
            <div className="container_signup">
                <div className="signup">
                    <div className="signup__description-wrap">
                        <h2 className="signup__description">'immune-it' is an app that empowers users to track their immunization history...digitally!</h2>
                    </div>
                    <form className="signup__wrapper" onSubmit={this.onSubmit}>
                        <div className="signup__greeting">
                            <div className="signup__logo"><Logo /></div>
                            <h2 className="signup__title">Sign up</h2>
                            <p className="signup__text">Register your account and access the benefits!</p>
                        </div>
                        <div className="signup__inputs">
                            <input type="text" className="signup__name input" placeholder="Username" value={this.state.name} onChange={this.updateName} />
                            <input type="email" className="signup__email input" placeholder="Email" value={this.state.email} onChange={this.updateEmail} />
                            <br /><input type="password" className="signup__password input" placeholder="Password" value={this.state.password} onChange={this.updatePassword} />
                        </div>
                        <div className="signup__CTAs">
                            <button type="submit" className="signup__signup">Sign Up</button><br />
                            <Link to="/">
                                <button className="signup__login">Return to Login</button>
                            </Link>
                        </div>
                        <div className="signup__lang">
                            <button className="signup__eng langInput">English</button>
                            <button className="signup__fra langInput">Français</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
