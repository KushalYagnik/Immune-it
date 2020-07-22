import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Knowledge from '../../components/Knowledge/Knowledge';
import Records from '../../components/Records/Records';
import About from '../../components/About/About';
import Login from '../../pages/Login/Login';
import Signup from '../../components/Signup/Signup';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/records' component={Records}/>
                        <Route path='/about' component={About}/>
                        <Route path='/knowledge' component={Knowledge}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/signup' component={Signup}/>
                        <Route exact path="/" component={Main}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home
