import React, { useState } from 'react';
import Modal from 'react-modal';
import add from '../../assets/Icon-add.svg';
import axios from 'axios';
import MultiSelect from "react-multi-select-component";

Modal.setAppElement('#root')

export default function AddPIR(params) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [shot_date, setShotdate] = useState("");
    const [shot_brand, setShotbrand] = useState("");
    const [shot_provider, setShotprovider] = useState("");
    const [selected, setSelected] = useState([]);
    const [shot_notes, setShotnotes] = useState("");
    const options = [
        { label: "Diphtheria", value: "Diphtheria" },
        { label: "Tetanus", value: "Tetanus" },
        { label: "Pertussis", value: "Pertussis"},
        { label: "Polio", value: "Polio" },
        { label: "Hib", value: "Hib" },
        { label: "Pneumococcal", value: "Pneumococcal" },
        { label: "Rotavirus", value: "Rotavirus" },
        { label: "Measles", value: "Measles" },
        { label: "Mumps", value: "Mumps" },
        { label: "Rubella", value: "Rubella" },
        { label: "Varicella", value: "Varicella" },
        { label: "Meningococcal", value: "Meningococcal" },
        { label: "Hepatitis B", value: "Hepatitis B" },
        { label: "HPV", value: "HPV" },
        { label: "Influenza", value: "Influenza" },
        { label: "Hepatitis A", value: "Hepatitis A" },
      ];
    const [apiURI] = useState(process.env.REACT_APP_API_URI || 'http://localhost:8080')


    const addRecord = () => {
        axios
            .post(`${apiURI}/pir`, {
                "shot_date": shot_date,
                "shot_brand": shot_brand,
                "shot_provider": shot_provider,
                "shot_coverage": selected.map((value) => value.value),
                "shot_notes": shot_notes,
                "record": params.record 
            }, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
            .then(res => {
                window.alert('Personal Immunization Record added!')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="modalI__select--containter">
                <button className="modalI__select" onClick={() => setModalIsOpen(true)}><img className="modalI__select--img" src={add} alt="addPIR"/></button>
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
                            <label className="modalI__form--label" htmlFor="Health-care Provider">Health-care Provider:</label>
                            <input type="text" className="modalI__form--input" onChange={(e) => setShotprovider(e.target.value)} name="Health-care Provider" placeholder="Health-care Provider" />
                            <label className="modalI__form--label" htmlFor="VaccineCoverage">Vaccine Coverage:</label>
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy={"Select"}
                            />
                            <label className="modalI__form--label" htmlFor="Doctor's Notes">Doctor's Notes:</label>
                            <textarea className="modalI__form--input modalI__form--textarea" onChange={(e) => setShotnotes(e.target.value)} name="Doctor's Notes" placeholder="Doctor's Notes"/>
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