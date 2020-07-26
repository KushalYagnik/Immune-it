import React, { useState } from 'react';
import './ImmunizationRecord.scss';
import Modal from 'react-modal';
import add from '../../assets/Icon-add.svg';
import axios from 'axios';
import MultiSelect from "@khanacademy/react-multi-select";

Modal.setAppElement('#root')

// const options = [
//     {label: "", value: ""},

// ]

export default function ImmunizationRecord() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [shot_date, setShotdate] = useState("")
    const [shot_brand, setShotbrand] = useState("")
    const [shot_provider, setShotprovider] = useState("")
    const [shot_coverage, setShotcoverage] = useState([
        'Diphtheria', 'Tetanus', 'Pertussis', 'Polia', 'Hib', 'Pneumococcal', 'Rotavirus', 'Measles',
        'Mumps', 'Rubella', 'Varicella', 'Meningococcal', 'Hepatitis_B', 'Hepatitis_A',
        'HPV', 'Influenza', 'Coronavirus'
    ])
    const [shot_coverageSelected, setShotcoverageSelected] = useState([])


    // const [token,setToken] = useState( localStorage.getItem("token"))

    const addRecord = () => {
        //CHANGE THIS ENDPOINT AFTER CREATING A NEW ONE
        axios
            .post('http://localhost:8080/view' + this.props.match.params.id, {
                "shot_date": shot_date,
                "shot_brand": shot_brand,
                "shot_provider": shot_provider,
                "shot_coverage": shot_coverageSelected,
            }, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(res => {
                console.log(res.data);
                window.alert('Personal Immunization Record added!')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="modalI__select--containter">
                <button className="modalI__select" onClick={() => setModalIsOpen(true)}><img className="modalI__select--img" src={add} /></button>
            </div>
            <div className="modalI">
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <form action="">
                        <div className="modalI__form modalI__form--container1">
                            <h2 className="modalI__title">Create Personal Immunization Record</h2>
                            <label className="modalI__form--label" htmlFor="Date">Date:</label>
                            <input type="date" className="modalI__form--input" onChange={(e) => setShotdate(e.target.value)} name="Date" placeholder="Date" />
                            <label className="modalI__form--label" htmlFor="VaccineBrand">Vaccine Brand:</label>
                            <input type="text" className="modalI__form--input" onChange={(e) => setShotbrand(e.target.value)} name="VaccineBrand" placeholder="Vaccine Brand" />
                            <label className="modalI__form--label" htmlFor="Health-care Provider:">Health-care Provider:</label>
                            <input type="text" className="modalI__form--input" onChange={(e) => setShotprovider(e.target.value)} name="Health-care Provider:" placeholder="Health-care Provider:" />
                            <label className="modalI__form--label" htmlFor="VaccineCoverage">Vaccine Coverage:</label>
                            {/* <select onChange={(e) => setShotcoverage(e.target.value)} name="VaccineCoverage" id="modalI__form--drpdwn" className="modalI__form--input"> */}
                            <MultiSelect shot_coverage={shot_coverage} shot_coverageSelected={shot_coverageSelected} setShotcoverage={shot_coverageSelected => this.useEffect({shot_coverageSelected})}/>
                                {/* {shot_coverage.map(item => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })}
                            </select> */}
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