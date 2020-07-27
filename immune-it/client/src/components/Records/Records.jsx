import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from '../../pages/Login/Login';
import Header from  '../../components/Header/Header';
import Modal from '../AddRecord/AddRecordModal';

const Record = props => (
    < tr >
        <td>{props.record.user_firstname}</td>
        <td>{props.record.user_lastname}</td>
        <td>{new Date(props.record.user_birthdate).toISOString().split('T')[0]}</td>
        <td>{props.record.user_gender}</td>
        <td>{props.record.user_recordfor}</td>
        <td>
            <Link to={"/edit/" + props.record._id}>Edit</Link>
            <br/><br/>
            <Link to={"/view/" + props.record._id}>Immunization Record</Link>
        </td>
        {/* <td>
            <Link to={"/view/" + props.record._id}>Immunization Record</Link>
        </td> */}
    </tr >
)

export default class Records extends Component {

    constructor(props) {
        super(props);
        this.state = { records: [], token: localStorage.getItem("token") };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/records/', {
            headers: {
                Authorization: 'Bearer ' + this.state.token //the token is a variable which holds the token
            }
        })
        .then(response => {
            this.setState({ records: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    recordsList() {
        return this.state.records.map(function (currentRecord, i) {
            return <Record record={currentRecord} key={i} />;
        })
    }

    render() {
        if(this.state.token) {
            return (
                <div>
                    <Header />
                    <Modal token/>
                    <h3>Records</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Birthdate</th>
                                <th>Gender</th>
                                <th>Record for</th>
                                {/* <th>Doctor's Name/Healthcare provider</th> */}
                                {/* <th>Doctor's Notes</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.recordsList()}
                        </tbody>
                    </table>
                </div>
            )
        } else {return (<Login/>)}
    }
}