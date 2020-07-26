import React, { Component } from 'react';
import Header from '../../components/Header/Header';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="main">
                    <div className="hero">
                        <h1 className="hero__header">Immunity has proved vital</h1>
                        <p>Lorem Ipsum gypsum whatever!</p>
                        <button>Get started</button>
                        <video autoPlay muted loop id="myVideo" src={require('../../assets/production ID_4121354.mp4')} type='video/mp4' />
                    </div>
                    <section className="body">
                        <div className="body__facts">Some health and immunity information goes here</div>
                        <div className="body__info">Add any relevant info about the site here</div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home
