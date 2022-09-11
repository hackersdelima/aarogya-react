import React from 'react'

import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import PatientsDataTable from './PatientsDataTable'

import './patients.scss'
import { Link } from 'react-router-dom'

const Patients = () => {

    return (
        <div className='patients'>
            <Sidebar />
            <div className="datatableContainer">
                <Navbar />

                <div className="newPatientBtn">
                    <Link to="/patients/new" style={{ textDecoration: "none" }}>
                        <span className='card' style={{"display": "block"}}>Register Patient</span>
                    </Link>
                </div>

                <div className="listContainer">
                    <div className="listTitle">All Patients</div>
                    <PatientsDataTable />
                </div>
            </div>
        </div >
    )
}

export default Patients