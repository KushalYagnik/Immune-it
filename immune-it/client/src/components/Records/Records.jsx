// import React, { Component } from 'react';
// import './Records.scss';
// import AddRecord from '../AddRecord/AddRecord';

// export class Records extends Component {
//     constructor() {
//         super();
//         this.state = { show: false }
//     }

//     showModal = () => {
//         this.setState({ show: true });
//     };

//     hideModal = () => {
//         this.setState({ show: false });
//     };

//     render() {
//         return (
//             <div className="records">
//                 <h1 className="records__title">Manage your immunization records</h1>
//                 <Modal show={this.state.show} handleClose={this.hideModal}>
//                     <AddRecord/>
//                 </Modal>
//                 <ul className="records__list">
//                     <li className="records__item">
//                         <a className="records__link" href="#">Sample Record</a>
//                     </li>
//                 </ul>
//                 <button type="button" onClick={this.showModal}>Open</button>
//             </div>
//         )
//     }
// }

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
//     return (
//       <div className={showHideClassName}>
//         <section className='modal-main'>
//           {children}
//           <button
//             onClick={handleClose}
//           >
//             Close
//           </button>
//         </section>
//       </div>
//     );
//   };



// export default Records

///////////////////////////////////////////////////

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    < tr >
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr >
)

export default class Records extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}