import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from '../../pages/Login/Login';
import Header from  '../../components/Header/Header';
import ImmuneModal from '../ImmunizationRecord/ImmunizationRecordModal'

const Record = props => (
    < tr >
        <td>{props.record.shot_date}</td>
        <td>{props.record.shot_brand}</td>
        <td>{props.record.shot_provider}</td>
        <td>{props.record.shot_coverage}</td>
        <td> {/*CHANGE THE BELOW LINK APPROPRIATELY*/}
            <Link to={"/edit/" + props.record._id}>Edit</Link>
        </td>
    </tr >
)

export default class ImmunizationRecord extends Component {

    constructor(props) {
        super(props);
        this.state = { records: [], token: localStorage.getItem("token") };
    }

    componentDidMount() {
        //CHECK THIS ENDPOINT 
        axios.get('http://localhost:8080/view/', {
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
                    <ImmuneModal token/>
                    <h3>Records</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Vaccine Brand</th>
                                <th>Healthcare Provider</th>    
                                <th>Diseases covered by vaccine</th>
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