import React, { useState } from 'react';
import './AddRecordModal.scss';
import Modal from 'react-modal';
import add from '../../assets/Icon-add.svg';
import axios from 'axios';

Modal.setAppElement('#root')


export default function AddRecordModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [user_firstname, setFirstname] = useState("")
  const [user_lastname, setLastname] = useState("")
  const [user_birthdate, setBdate] = useState("")
  const [user_gender, setGender] = useState("Male")
  const [user_recordfor, setRecordfor] = useState("Self")
  const apiURI = process.env.REACT_APP_API_URI || 'http://localhost:8080'
  const addRecord = () => {
    axios
      .post(`${apiURI}/records`, {
        "user_firstname": user_firstname,
        "user_lastname": user_lastname,
        "user_birthdate": user_birthdate,
        "user_gender": user_gender,
        "user_recordfor": user_recordfor,
      }, { headers: {Authorization: 'Bearer ' +  localStorage.getItem("token")} })
      .then(res => {
          window.alert('New Record added!')
        })
      .catch(err => console.error(err))
  }
  return (
    <div>
      <div className="modalI__select--containter">
        <button className="modalI__select" onClick={() => setModalIsOpen(true)}><img className="modalI__select--img" src={add} alt="modal"/></button>
      </div>
      <div className="modalI">
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <form action="">
            <div className="modalI__form modalI__form--container1">
              <h2 className="modalI__title">Create New Record</h2>
              <label className="modalI__form--label" htmlFor="FirstName">First Name:</label>
              <input type="text" className="modalI__form--input" onChange={(e) => setFirstname(e.target.value)}name="FirstName" placeholder="First Name" />
              <label className="modalI__form--label" htmlFor="LastName">Last Name:</label>
              <input type="text" className="modalI__form--input" onChange={(e) => setLastname(e.target.value)}name="LastName" placeholder="Last Name" />
              <label className="modalI__form--label" htmlFor="Birthdate:">Birthdate:</label>
              <input type="date" className="modalI__form--input" onChange={(e) => setBdate(e.target.value)}name="Birthdate:" placeholder="Birthdate:" />
              <label className="modalI__form--label" htmlFor="Gender">Gender:</label>
              <select onChange={(e) => setGender(e.target.value)}name="Gender" id="modalI__form--drpdwn" className="modalI__form--input">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <label className="modalI__form--label" htmlFor="RecordFor">Record For:</label>
              <select className="modalI__form--drpdwn" onChange={(e) => setRecordfor(e.target.value)}name="RecordFor">
                <option value="Self">Self</option>
                <option value="Spouse">Spouse</option>
                <option value="Child">Child</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="modalI__form--containerButtons">
              <button className="modalI__form--save" onClick={addRecord}>Add</button>
              <button className="modalI__form--cancel" onClick={() => setModalIsOpen(false)}>Cancel</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}