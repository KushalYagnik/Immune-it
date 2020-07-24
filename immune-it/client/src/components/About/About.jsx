import React, { Component } from 'react';
import './About.scss';
import Imm from '../ImmunizationRecord/ImmunizationRecord';

export class About extends Component {
    render() {
        return (
            <div>
                <Imm/>
                You're in About page now!
                This is the place to right about myself and the project (stack used, etc.)
            </div>
        )
    }
}

export default About
