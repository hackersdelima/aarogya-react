import React from 'react'
import './doctors.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import DoctorsDataTable from './DoctorsDataTable'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div className='doctors'>
      <Sidebar />
      <div className="datatableContainer">
        <Navbar />
        
        <div className="newDoctorBtn">
          <Link to="/doctors/new" style={{ textDecoration: "none" }}>
            <span className='card' style={{ "display": "block" }}>Register Doctor</span>
          </Link>
        </div>

        <div className="listContainer">
          <div className="listTitle">All Doctors</div>
          <DoctorsDataTable />
        </div>
      </div>
    </div >
  )
}

export default Doctors