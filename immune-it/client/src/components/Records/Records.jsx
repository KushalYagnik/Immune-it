import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Record = props => (
    < tr >
        <td>{props.record.user_firstname}</td>
        <td>{props.record.user_lastname}</td>
        <td>{props.record.user_birthdate}</td>
        <td>{props.record.user_gender}</td>
        <td>{props.record.user_recordfor}</td>
        <td>
            <Link to={"/edit/" + props.record._id}>Edit</Link>
            <br/><br/><Link to={"/view/" + props.record._id}>Immunization Record</Link>
        </td>
        {/* <td>
            <Link to={"/view/" + props.record._id}>Immunization Record</Link>
        </td> */}
    </tr >
)

export default class Records extends Component {

    constructor(props) {
        super(props);
        this.state = { records: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/records/')
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
        return (
            <div>
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
    }
}

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const Todo = props => (
//     < tr >
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
//         <td>
//             <Link to={"/edit/" + props.todo._id}>Edit</Link>
//         </td>
//     </tr >
// )

// export default class Records extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { todos: [] };
//     }

//     componentDidMount() {
//         axios.get('http://localhost:8080/todos/')
//             .then(response => {
//                 this.setState({ todos: response.data });
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     todoList() {
//         return this.state.todos.map(function (currentTodo, i) {
//             return <Todo todo={currentTodo} key={i} />;
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Records</h3>
//                 <table className="table table-striped" style={{ marginTop: 20 }} >
//                     <thead>
//                         <tr>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Birthdate</th>
//                             <th>Gender</th>
//                             <th>Record for</th>
//                             {/* <th>Doctor's Name/Healthcare provider</th> */}
//                             {/* <th>Doctor's Notes</th> */}
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.todoList()}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }