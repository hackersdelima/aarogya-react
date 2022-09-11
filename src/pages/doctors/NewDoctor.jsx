import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'

import './newDoctor.scss'
import DoctorForm from './DoctorForm'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

import { DOCTORS_CREATE_API } from '../../components/constants'
import { getBearerHeaderValue } from '../../service/userservice'

import { useState } from 'react'
import axios from 'axios'

const NewDoctor = () => {

    const [gender, setGender] = useState('M');
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [bloodGroup, setBloodGroup] = useState(null);
    const [alternatePhone, setAlternatePhone] = useState(null);
    const status = 'TRUE';
    const type = 'DOCTOR';

    function save(event) {
        event.preventDefault();

        let item = { type, gender, name, email, phone, address, bloodGroup, alternatePhone, status };
        const response = axios.post(DOCTORS_CREATE_API, item,
            {
                headers: {
                    'Authorization': getBearerHeaderValue()
                }
            }).then(
                res => {
                    console.log('Doctor created');
                }
            ).catch(err => {
                console.log(err);
            });
    }


    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Register Doctor</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={save}>
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlined className="icon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <div className="formInput">
                                <label>Gender</label>
                                <select onChange={(e) => {
                                    setGender(e.target.value)
                                }} >
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                    </div>
                    <div className="formInput">
                        <label>Name</label>
                        <input type="text" placeholder="Full name"
                            onKeyUp={(e) => {
                                setName(e.target.value)
                            }} />
                    </div>
                    <div className="formInput">
                        <label>Phone</label>
                        <input type="text" placeholder="Phone"
                            onKeyUp={(e) => {
                                setPhone(e.target.value)
                            }} />
                    </div>
                    <div className="formInput">
                        <label>Alternate Phone</label>
                        <input type="text" placeholder="Alt phone"
                            onKeyUp={(e) => {
                                setAlternatePhone(e.target.value)
                            }} />
                    </div>
                    <div className="formInput">
                        <label>Email</label>
                        <input type="text" placeholder="Email"
                            onKeyUp={(e) => {
                                setEmail(e.target.value)
                            }} />
                    </div>
                    <div className="formInput">
                        <label>Address</label>
                        <input type="text" placeholder="Address"
                            onKeyUp={(e) => {
                                setAddress(e.target.value)
                            }} />
                    </div>
                    <div className="formInput">
                        <label>Blood Grp</label>
                        <input type="text" placeholder="Blood grp"
                            onKeyUp={(e) => {
                                setBloodGroup(e.target.value)
                            }} />
                    </div>
                    <button>Register</button>

                </form>
            </div>
        </div>
            </div >
        </div >
    )
}

export default NewDoctor