import React, { Component } from 'react';
import './Records.scss';
import AddRecord from '../AddRecord/AddRecord';

export class Records extends Component {
    constructor() {
        super();
        this.state = { show: false }
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className="records">
                <h1 className="records__title">Manage your immunization records</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <AddRecord/>
                </Modal>
                <ul className="records__list">
                    <li className="records__item">
                        <a className="records__link" href="#">Sample Record</a>
                    </li>
                </ul>
                <button type="button" onClick={this.showModal}>Open</button>
            </div>
        )
    }
}

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



export default Records