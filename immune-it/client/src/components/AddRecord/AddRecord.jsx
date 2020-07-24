import React, { Component } from "react";
import axios from "axios";


export default class AddRecord extends Component {
  constructor(props) {
    super(props);

//>>>>>>> Bind the state to event handler functions    
    this.updateFirstname = this.updateFirstname.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
    this.updateBdate = this.updateBdate.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.updateRecordfor = this.updateRecordfor.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
//>>>>>>>>> Set the object and its data fields to be used
    this.state = {
      user_firstname: "",
      user_lastname: "",
      user_birthdate: "",
      user_gender: "",
      user_recordfor: "",
    };
  }
//>>>> Declare the functions to handle state change for those fields
  updateFirstname(e){this.setState({user_firstname: e.target.value})};
  updateLastname(e){this.setState({user_lastname: e.target.value})};
  updateBdate(e){this.setState({user_birthdate: e.target.value})};
  updateGender(e){this.setState({user_gender: e.target.value})};
  updateRecordfor(e){this.setState({user_recordfor: e.target.value})};
  
  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Name: ${this.state.user_firstname} ${this.state.user_lastname}`);
    console.log(`Gender: ${this.state.user_gender}`);
    console.log(`Related as: ${this.state.user_recordfor}`);

    const newRecord = {
      user_firstname: this.state.user_firstname,
      user_lastname: this.state.user_lastname,
      user_birthdate: this.state.user_birthdate,
      user_gender: this.state.user_gender,
      user_recordfor: this.state.user_recordfor,
    };

    axios
      .post("http://localhost:8080/records/add", newRecord)
      .then((res) => {
        console.log(res.data);
        window.alert('New Record added!')
      });

    this.setState({
      user_firstname: "",
      user_lastname: "",
      user_birthdate: "",
      user_gender: "",
      user_recordfor: "",
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_firstname}
              onChange={this.updateFirstname}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_lastname}
              onChange={this.updateLastname}
            />
          </div>
          <div className="form-group">
            <label>Birthdate: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.user_birthdate}
              onChange={this.updateBdate}
            />
          </div>
{/* >>>>>>> Gender options */}
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="genderMale"
                value="Male"
                checked={this.state.user_gender=== "Male"}
                onChange={this.updateGender}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="genderFemale"
                value="Female"
                checked={this.state.user_gender === "Female"}
                onChange={this.updateGender}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
{/* >>>>> Record holder options */}
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recordForOptions"
                id="forSelf"
                value="Self"
                checked={this.state.user_recordfor=== "Self"}
                onChange={this.updateRecordfor}
              />
              <label className="form-check-label">Self</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recordForOptions"
                id="forSpouse"
                value="Spouse"
                checked={this.state.user_recordfor === "Spouse"}
                onChange={this.updateRecordfor}
              />
              <label className="form-check-label">Spouse</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recordForOptions"
                id="forChild"
                value="Child"
                checked={this.state.user_recordfor === "Child"}
                onChange={this.updateRecordfor}
              />
              <label className="form-check-label">Child</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="recordForOptions"
                id="forOther"
                value="Other"
                checked={this.state.user_recordfor === "Other"}
                onChange={this.updateRecordfor}
              />
              <label className="form-check-label">Other</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
