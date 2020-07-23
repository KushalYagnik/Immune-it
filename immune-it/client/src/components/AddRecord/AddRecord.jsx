// import React, { Component } from 'react';
// import './AddRecord.scss';

// export class AddRecord extends Component {

//     render() {
//         return (
//             <div className="addrecord">
//                 <form action="" className="records__form">
//                     <input type="text" className="records__firstname" placeholder="First Name"/>
//                     <input type="text" className="records__lastname" placeholder="Last Name"/>
//                     <input type="date" className="records__birthdate" />
//                     <div className="records__gender-container">
//                         <label htmlFor="male">Male</label>
//                         <input type="radio" className="records__gender" id="gender_male" name="male" value="male"/>
//                         <label htmlFor="female">Female</label>
//                         <input type="radio" className="records__gender" id="gender_female" name="female" value="female"/>
//                     </div>
//                     <div className="records__relation-container">
//                         <label htmlFor="female">Myself</label>
//                         <input type="radio" className="records__relation" id="relation_myself" name="myself" value="myself"/>
//                         <label htmlFor="spouse">Spouse</label>
//                         <input type="radio" className="records__relation" id="relation_spouse" name="spouse" value="spouse"/>
//                         <label htmlFor="child">Child</label>
//                         <input type="radio" className="records__relation" id="relation_child" name="child" value="child"/>
//                         <label htmlFor="other">Other</label>
//                         <input type="radio" className="records__relation" id="relation_other" name="other" value="other"/>
//                     </div>
//                     <input type="text" className="records__doctorname" placeholder="Doctor's name"/>
//                     <textarea className="records__doctorsnote" cols="30" rows="10" placeholder="Doctor's notes"/>
//                 </form>
//             </div>
//         )
//     }
// }

// export default AddRecord

////////////////////////////////////////////////////

import React, { Component } from "react";
import axios from "axios";

export default class AddRecord extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then((res) => {
        console.log(res.data);
        window.alert('New Record added!')
      });

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
