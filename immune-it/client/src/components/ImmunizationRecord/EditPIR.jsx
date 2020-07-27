import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import MultiSelect from "react-multi-select-component";

export default class EditPIR extends Component {
    constructor(props) {
        super(props);

        //>>>>>>> Bind the state to event handler functions    
        this.updateShotdate = this.updateShotdate.bind(this);
        this.updateShotbrand = this.updateShotbrand.bind(this);
        this.updateShotprovider = this.updateShotprovider.bind(this);
        this.updateShotcoverage = this.updateShotcoverage.bind(this);
        this.updateShotnotes = this.updateShotnotes.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            shot_date: "",
            shot_brand: "",
            shot_provider: "",
            shot_coverage: "",
            shot_notes: "",
        
            selected: [],
            options: [
                { label: "Diphtheria", value: "Diphtheria" },
                { label: "Tetanus", value: "Tetanus" },
                { label: "Pertussis", value: "Pertussis"},
                { label: "Polio", value: "Polio" },
                { label: "Hib", value: "Hib" },
                { label: "Pneumococcal", value: "Pneumococcal" },
                { label: "Rotavirus", value: "Rotavirus" },
                { label: "Measles", value: "Measles" },
                { label: "Mumps", value: "Mumps" },
                { label: "Rubella", value: "Rubella" },
                { label: "Varicella", value: "Varicella" },
                { label: "Meningococcal", value: "Meningococcal" },
                { label: "Hepatitis B", value: "Hepatitis B" },
                { label: "HPV", value: "HPV" },
                { label: "Influenza", value: "Influenza" },
                { label: "Hepatitis A", value: "Hepatitis A" },
              ],

            token: localStorage.getItem("token")
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/pir/' + this.props.match.params.id, {
            headers: {
                Authorization: 'Bearer ' + this.state.token //the token is a variable which holds the token
            }
        })
            .then(response => {
                this.setState({
                    shot_date: new Date(response.data.shot_date).toISOString().split('T')[0],
                    shot_brand: response.data.shot_brand,
                    shot_provider: response.data.shot_provider,
                    shot_coverage: response.data.shot_coverage.map((ele) => {
                        return {label: ele, value: ele}
                    }),
                    shot_notes: response.data.shot_notes,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //>>>> Declare the functions to handle state change for those fields
    updateShotdate(e) { this.setState({ shot_date: e.target.value }) };
    updateShotbrand(e) { this.setState({ shot_brand: e.target.value }) };
    updateShotprovider(e) { this.setState({ shot_provider: e.target.value }) };
    updateShotcoverage(e) { this.setState({ shot_coverage: e }) };
    updateShotnotes(e) { this.setState({ shot_notes: e.target.value }) };

    onDelete() {
        axios.delete("http://localhost:8080/pir/" + this.props.match.params.id, {
            headers: {
                Authorization: 'Bearer ' + this.state.token //the token is a variable which holds the token
            }
        })
            .then((res) => {
                console.log(res.data);
                window.alert('Record deleted!');
            });

        this.props.history.push("/");
        // this.props.history.goBack();
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            shot_date: this.state.shot_date,
            shot_brand: this.state.shot_brand,
            shot_provider: this.state.shot_provider,
            shot_coverage: this.state.shot_coverage.map(ele => ele.value),
            shot_notes: this.state.shot_notes,
        };
        console.log(obj);
        axios.put('http://localhost:8080/pir/' + this.props.match.params.id, obj, {
            headers: {
                Authorization: 'Bearer ' + this.state.token //the token is a variable which holds the token
            }
        })
            .then(res => {
                console.log(res.data);
                window.alert('Record updated!');
            });

        this.props.history.push("/");
        // this.props.history.goBack()

    }

    render() {
        return (
            <div>
                <Header />
                <h3 align="center">Update Personal Immunization Record</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="form-check-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={this.state.shot_date}
                            onChange={this.updateShotdate}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-check-label">Vaccine Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.shot_brand}
                            onChange={this.updateShotbrand}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-check-label">Health-care Provider</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.shot_provider}
                            onChange={this.updateShotprovider}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-check-label" htmlFor="VaccineCoverage">Vaccine Coverage:</label>
                        <MultiSelect
                            options={this.state.options}
                            value={this.state.shot_coverage}
                            onChange={this.updateShotcoverage}
                            labelledBy={"Select"}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-check-label">Doctor's notes:</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.shot_notes}
                            onChange={this.updateShotnotes}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Record" className="btn btn-primary" />
                    </div>
                    <div className="form-group">
                        <button onClick={this.onDelete} className="btn btn-danger">Delete Record</button>
                    </div>
                </form>
            </div>
        )
    }
}