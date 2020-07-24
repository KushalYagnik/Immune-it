import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecord extends Component {

    constructor(props) {
        super(props);

        //>>>>>>> Bind the state to event handler functions    
        this.updateFirstname = this.updateFirstname.bind(this);
        this.updateLastname = this.updateLastname.bind(this);
        this.updateBdate = this.updateBdate.bind(this);
        this.updateGender = this.updateGender.bind(this);
        this.updateRecordfor = this.updateRecordfor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            user_firstname: "",
            user_lastname: "",
            user_birthdate: "",
            user_gender: "",
            user_recordfor: "",
            // user_shots: [
            //     {
            //         "measles": false,
            //         "tetanus": true,
            //     }
            // ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/records/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    user_firstname: response.data.user_firstname,
                    user_lastname: response.data.user_lastname,
                    user_birthdate: response.data.user_birthdate,
                    user_gender: response.data.user_gender,
                    user_recordfor: response.data.user_recordfor,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //>>>> Declare the functions to handle state change for those fields
    updateFirstname(e) { this.setState({ user_firstname: e.target.value }) };
    updateLastname(e) { this.setState({ user_lastname: e.target.value }) };
    updateBdate(e) { this.setState({ user_birthdate: e.target.value }) };
    updateGender(e) { this.setState({ user_gender: e.target.value }) };
    updateRecordfor(e) { this.setState({ user_recordfor: e.target.value }) };

    onDelete() {
        axios.delete("http://localhost:8080/records/delete/" + this.props.match.params.id)
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
            user_firstname: this.state.user_firstname,
            user_lastname: this.state.user_lastname,
            user_birthdate: this.state.user_birthdate,
            user_gender: this.state.user_gender,
            user_recordfor: this.state.user_recordfor,
        };
        console.log(obj);
        axios.post('http://localhost:8080/records/update/' + this.props.match.params.id, obj)
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
                <h3 align="center">Update Record</h3>
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
                                checked={this.state.user_gender === "Male"}
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
                                checked={this.state.user_recordfor === "Self"}
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


// import React, { Component } from 'react';
// import axios from 'axios';

// export default class EditRecord extends Component {

//     constructor(props) {
//         super(props);

//         this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
//         this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
//         this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
//         this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.onDelete = this.onDelete.bind(this);

//         this.state = {
//             todo_description: '',
//             todo_responsible: '',
//             todo_priority: '',
//             todo_completed: false
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:8080/todos/'+this.props.match.params.id)
//             .then(response => {
//                 this.setState({
//                     todo_description: response.data.todo_description,
//                     todo_responsible: response.data.todo_responsible,
//                     todo_priority: response.data.todo_priority,
//                     todo_completed: response.data.todo_completed
//                 })   
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     onChangeTodoDescription(e) {
//         this.setState({
//             todo_description: e.target.value
//         });
//     }

//     onChangeTodoResponsible(e) {
//         this.setState({
//             todo_responsible: e.target.value
//         });
//     }

//     onChangeTodoPriority(e) {
//         this.setState({
//             todo_priority: e.target.value
//         });
//     }

//     onChangeTodoCompleted(e) {
//         this.setState({
//             todo_completed: !this.state.todo_completed
//         });
//     }

//     onDelete(){
//         axios.delete("http://localhost:8080/todos/delete/" + this.props.match.params.id)
//             .then((res) => console.log(res.data));

//         this.props.history.push("/");
//         // this.props.history.goBack();
//     }

//     onSubmit(e) {
//         e.preventDefault();
//         const obj = {
//             todo_description: this.state.todo_description,
//             todo_responsible: this.state.todo_responsible,
//             todo_priority: this.state.todo_priority,
//             todo_completed: this.state.todo_completed
//         };
//         console.log(obj);
//         axios.post('http://localhost:8080/todos/update/'+this.props.match.params.id, obj)
//             .then(res => {
//                 console.log(res.data);
//                 window.alert('Record updated!');
//             });

//         this.props.history.push('/records');
//         // this.props.history.goBack()

//     }

//     render() {
//         return (
//             <div>
//                 <h3 align="center">Update Todo</h3>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group"> 
//                         <label>Description: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.todo_description}
//                                 onChange={this.onChangeTodoDescription}
//                                 />
//                     </div>
//                     <div className="form-group">
//                         <label>Responsible: </label>
//                         <input 
//                                 type="text" 
//                                 className="form-control"
//                                 value={this.state.todo_responsible}
//                                 onChange={this.onChangeTodoResponsible}
//                                 />
//                     </div>
//                     <div className="form-group">
//                         <div className="form-check form-check-inline">
//                             <input  className="form-check-input" 
//                                     type="radio" 
//                                     name="priorityOptions" 
//                                     id="priorityLow" 
//                                     value="Low"
//                                     checked={this.state.todo_priority==='Low'} 
//                                     onChange={this.onChangeTodoPriority}
//                                     />
//                             <label className="form-check-label">Low</label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input  className="form-check-input" 
//                                     type="radio" 
//                                     name="priorityOptions" 
//                                     id="priorityMedium" 
//                                     value="Medium" 
//                                     checked={this.state.todo_priority==='Medium'} 
//                                     onChange={this.onChangeTodoPriority}
//                                     />
//                             <label className="form-check-label">Medium</label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input  className="form-check-input" 
//                                     type="radio" 
//                                     name="priorityOptions" 
//                                     id="priorityHigh" 
//                                     value="High" 
//                                     checked={this.state.todo_priority==='High'} 
//                                     onChange={this.onChangeTodoPriority}
//                                     />
//                             <label className="form-check-label">High</label>
//                         </div>
//                     </div>
//                     <div className="form-check">
//                         <input  className="form-check-input"
//                                 id="completedCheckbox"
//                                 type="checkbox"
//                                 name="completedCheckbox"
//                                 onChange={this.onChangeTodoCompleted}
//                                 checked={this.state.todo_completed}
//                                 value={this.state.todo_completed}
//                                 />
//                         <label className="form-check-label" htmlFor="completedCheckbox">
//                             Completed
//                         </label>                        
//                     </div>

//                     <br />

//                     <div className="form-group">
//                         <input type="submit" value="Update Todo" className="btn btn-primary" />
//                     </div>
//                     <div className="form-group">
//                         <button onClick={this.onDelete} className="btn btn-danger">Delete</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }