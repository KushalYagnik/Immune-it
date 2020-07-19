import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <div className="main"> {/*This is the landing page for site, some info and login goes here*/}
                <div className="hero">
                    <h1 className="hero__header">Hero header text goes here</h1>
                </div>
                <section className="body">
                    <div className="body__facts">Some health and immunity information goes here</div>
                    <div className="body__info">Add any relevant info about the site here</div>
                </section>
            </div>
        )
    }
}

export default Main
