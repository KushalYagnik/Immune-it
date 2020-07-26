import React, { Component } from 'react';
import './About.scss';
import Header from '../../components/Header/Header';
// import EditModal from '../../components/EditRecord/EditRecordModal'

export class About extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <EditModal/> */}

                You're in About page now!
                This is the place to right about myself and the project (stack used, etc.)
            </div>
        )
    }
}

export default About
