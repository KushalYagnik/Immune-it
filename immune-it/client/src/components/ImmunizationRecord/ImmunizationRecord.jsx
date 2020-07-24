import React, { Component } from 'react';
import axios from 'axios';

export default class ImmunizationRecord extends Component {

    constructor(props) {
        super(props);

        //>>>>>>> Bind the state to event handler functions    
        this.updateMeasles = this.updateMeasles.bind(this);
        this.updateTetanus = this.updateTetanus.bind(this);
        this.updatePolio = this.updatePolio.bind(this);
        this.updateInfluenza = this.updateInfluenza.bind(this);
        this.updateCOVID = this.updateCOVID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onDelete = this.onDelete.bind(this);

        this.state = {
            shot_measles: "",
            shot_tetanus: "",
            shot_polio: "",
            shot_influenza: "",
            shot_COVID: "",
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/view/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    shot_measles: response.data.shot_measles,
                    shot_tetanus: response.data.shot_tetanus,
                    shot_polio: response.data.shot_polio,
                    shot_influenza: response.data.shot_influenza,
                    shot_COVID: response.data.shot_COVID,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //>>>> Declare the functions to handle state change for those fields
    updateMeasles(e) { this.setState({ shot_measles: e.target.value }) };
    updateTetanus(e) { this.setState({ shot_tetanus: e.target.value }) };
    updatePolio(e) { this.setState({ shot_polio: e.target.value }) };
    updateInfluenza(e) { this.setState({ shot_influenza: e.target.value }) };
    updateCOVID(e) { this.setState({ shot_COVID: e.target.value }) };

    // onDelete() {
    //     axios.delete("http://localhost:8080/records/delete/" + this.props.match.params.id)
    //         .then((res) => {
    //             console.log(res.data);
    //             window.alert('Record deleted!');
    //         });

    //     this.props.history.push("/");
    //     // this.props.history.goBack();
    // }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            shot_measles: this.state.shot_measles,
            shot_tetanus: this.state.shot_tetanus,
            shot_polio: this.state.shot_polio,
            shot_influenza: this.state.shot_influenza,
            shot_COVID: this.state.shot_COVID,
        };
        console.log(obj);
        axios.post('http://localhost:8080/view/update/' + this.props.match.params.id, obj)
            .then(res => {
                console.log(res.data);
                window.alert('Immunization data updated!');
            });

        this.props.history.push("/");

    }

    render() {
        return (
            <div>
                <h3 align="center">Immunization Data</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="vaccineOptions"
                                id="measles"
                                value="Measles"
                                checked={this.state.shot_measles === "Measles"}
                                onChange={this.updateMeasles}
                            />
                            <label className="form-check-label">Measles</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="vaccineOptions"
                                id="tetanus"
                                value="Tetanus"
                                checked={this.state.shot_tetanus === "Tetanus"}
                                onChange={this.updateTetanus}
                            />
                            <label className="form-check-label">Tetanus</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="vaccineOptions"
                                id="polio"
                                value="Polio"
                                checked={this.state.shot_polio === "Polio"}
                                onChange={this.updatePolio}
                            />
                            <label className="form-check-label">Polio</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="vaccineOptions"
                                id="influenza"
                                value="Influenza"
                                checked={this.state.shot_influenza === "Influenza"}
                                onChange={this.updateInfluenza}
                            />
                            <label className="form-check-label">Influenza</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="vaccineOptions"
                                id="COVID"
                                value="COVID"
                                checked={this.state.shot_COVID === "COVID"}
                                onChange={this.updateCOVID}
                            />
                            <label className="form-check-label">COVID</label>
                        </div>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Record" className="btn btn-primary" />
                    </div>
                    {/* <div className="form-group">
                        <button onClick={this.onDelete} className="btn btn-danger">Delete Record</button>
                    </div> */}
                </form>
            </div>
        )
    }
}
