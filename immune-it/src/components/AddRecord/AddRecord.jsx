import React, { Component } from 'react';
import './AddRecord.scss';

export class AddRecord extends Component {

    render() {
        return (
            <div className="addrecord">
                <form action="" className="records__form">
                    <input type="text" className="records__firstname" placeholder="First Name"/>
                    <input type="text" className="records__lastname" placeholder="Last Name"/>
                    <input type="date" className="records__birthdate" />
                    <div className="records__gender-container">
                        <label htmlFor="male">Male</label>
                        <input type="radio" className="records__gender" id="gender_male" name="male" value="male"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" className="records__gender" id="gender_female" name="female" value="female"/>
                    </div>
                    <div className="records__relation-container">
                        <label htmlFor="female">Myself</label>
                        <input type="radio" className="records__relation" id="relation_myself" name="myself" value="myself"/>
                        <label htmlFor="spouse">Spouse</label>
                        <input type="radio" className="records__relation" id="relation_spouse" name="spouse" value="spouse"/>
                        <label htmlFor="child">Child</label>
                        <input type="radio" className="records__relation" id="relation_child" name="child" value="child"/>
                        <label htmlFor="other">Other</label>
                        <input type="radio" className="records__relation" id="relation_other" name="other" value="other"/>
                    </div>
                    <input type="text" className="records__doctorname" placeholder="Doctor's name"/>
                    <textarea className="records__doctorsnote" cols="30" rows="10" placeholder="Doctor's notes"/>
                </form>
            </div>
        )
    }
}

export default AddRecord
