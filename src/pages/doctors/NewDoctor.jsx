import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'

import '../container.scss'
import DoctorForm from './DoctorForm'

const NewDoctor = () => {
    return (
        <div className='mainContainer'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="formContainer">
                    <div className="title">Register Doctor</div>
                    <DoctorForm />
                </div>
            </div>
        </div >
    )
}

export default NewDoctor