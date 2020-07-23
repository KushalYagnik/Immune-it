showModal = () => {
    this.setState({ show: true });
};

hideModal = () => {
    this.setState({ show: false });
};

<Modal show={this.state.show} handleClose={this.hideModal}>
    <AddRecord />
</Modal>
<button type="button" onClick={this.showModal}>Open</button>

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };


//   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
          </button>
            </section>
        </div>
    );
};

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

export default class TodosList extends Component {

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

    showModal = () => {
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

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