import React, { Component } from 'react';
import './About.scss';
import Header from '../../components/Header/Header';
import waitImg from '../../assets/comingsoonimg.png';

export class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <h2>About page</h2>
                <p>Add some project info (stack used, challenges, etc.) and self introduction here!</p>
                <img id="comingSoon" src={waitImg} alt="under-construction-img"/>
            </div>
        )
    }
}

export default About
