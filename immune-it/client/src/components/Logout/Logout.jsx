import React, { Component } from 'react';
import './Logout.scss';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export class Logout extends Component {
    constructor(props){
        super(props);
        
        this.logout = this.logout.bind(this);
        this.state = {
            loggedIn: localStorage.getItem("token") ? true : false
        };
    }

    async logout() {
        const token = localStorage.getItem("token");
        localStorage.clear();
        this.setState({loggedIn: false});
        await axios.post('http://localhost:8080/users/me/logout', null, { headers: { Authorization: 'Bearer ' + token } });
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <div>
                    <button className="logout__btn" onClick={(this.logout)}>Logout</button>
                </div>
            )
        }
        else {
            return (
                <Redirect to={"/"} />
            );
        }
    }
}

export default Logout
