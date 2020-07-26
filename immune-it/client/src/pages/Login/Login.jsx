import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Login.scss';
import Logo from '../../components/Logo/Logo';
import Header from  '../../components/Header/Header';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super (props);
        
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            loggedIn: localStorage.getItem("token") ? true : false
        };
    }

    updateEmail(e){this.setState({email: e.target.value})};
    updatePassword(e) {this.setState({password: e.target.value})};

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:8080/users/login/', obj)
            .then(res => {
                console.log(res.data);
                window.alert('Login successful');
                localStorage.setItem("token", res.data.token);
                this.setState({loggedIn: true});
            });
    }

    render() {
        if(this.state.loggedIn) {
            console.log("Success")
            return (
                <Redirect to={"/home"} />
                // this.props.history.push('/home')
            );
        }
        return (
            <div><Header />
                <div className="login">
                    <form className="login__wrapper" onSubmit={this.onSubmit}>
                        <div className="login__greeting">
                            <Logo />
                            <h2 className="login__title">Login</h2>
                            <p className="login__text">Please login to access the app</p>
                        </div>
                        <div className="login__inputs">
                            <input type="email" className="login__email input" placeholder="Email" value={this.state.email} onChange={this.updateEmail}/>
                            <input type="password" className="login__password input" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
                        </div>
                        <div className="login__CTAs">
                            <button type="submit" className="login__login">Login</button>
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
            </div>            
        )
    }
}
