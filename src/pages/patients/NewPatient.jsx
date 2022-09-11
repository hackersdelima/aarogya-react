import React from 'react'
import PatientForm from './PatientForm'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'

import '../container.scss'

const NewPatient = () => {
    return (
        <div className='mainContainer'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="formContainer">
                    <div className="title">Register Patient</div>
                    <PatientForm/>
                </div>
            </div>
        </div >
    )
}

export default NewPatient