import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Login from '../../pages/Login/Login';
import Header from '../../components/Header/Header';
import ImmuneModal from '../ImmunizationRecord/AddPIR';
import './ImmunizationRecord.scss';

const Record = props => (
    < tr >
        <td>{new Date(props.record.shot_date).toISOString().split('T')[0]}</td>
        <td>{props.record.shot_brand}</td>
        <td>{props.record.shot_provider}</td>
        <td>{props.record.shot_coverage.map((i) => (<li key={i}>{i}</li>))}</td>
        <td>{props.record.shot_notes}</td>
        <td>
            <Link to={"/pir/" + props.record._id}>Edit</Link>
        </td>
    </tr >
)

export default class ImmunizationRecord extends Component {

    constructor(props) {
        super(props);
        this.state = { records: [], record_id: props.match.params.id, token: localStorage.getItem("token") };
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/pirAll/${this.state.record_id}`, {
            headers: {
                Authorization: 'Bearer ' + this.state.token
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
        if (this.state.token) {
            return (
                <div className="immurecordspage">
                    <Header />
                    <ImmuneModal record={this.state.record_id} />
                    <h3>Personal Immunization Record</h3>
                    <table className="table table-striped table-responsive w-auto p-3 h-100 d-md-inline-block" id="vaccine-coverage-table" style={{ marginTop: 20 }} >
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Vaccine Brand</th>
                                <th>Healthcare Provider</th>
                                <th>Diseases covered by vaccine</th>
                                <th>Doctor's Notes</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.recordsList()}
                        </tbody>
                    </table>
                </div>
            )
        } else { return (<Login />) }
    }
}