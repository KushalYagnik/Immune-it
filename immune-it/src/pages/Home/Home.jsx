import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default Home
