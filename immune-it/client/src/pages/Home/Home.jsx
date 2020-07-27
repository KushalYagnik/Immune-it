import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import '../Home/Home.scss';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="home__main">
                    <div className="hero">
                        <video autoPlay muted loop id="myVideo" src={require('../../assets/production ID_4121354.mp4')} type='video/mp4' />
                        <h1 className="hero__header">Immunity is the <span className="hero__header-key">key</span> to <span className="hero__header-strength">strength</span></h1>
                        <p className="hero__text">Track your vaccinations and take a step towards good health</p>
                        <button className="hero__CTA">Get started</button>
                    </div>
                    <section className="home__body">
                        <div className="body__facts">Some health and immunity information goes here</div>
                        <div className="body__info">Add any relevant info about the site here</div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home
