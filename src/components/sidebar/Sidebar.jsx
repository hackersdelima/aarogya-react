import React from 'react'
import './sidebar.scss'
import SpaIcon from '@mui/icons-material/Spa';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BiotechIcon from '@mui/icons-material/Biotech';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { Link } from 'react-router-dom';
import { USER_INFO_STORAGE_KEY } from '../constants';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem(USER_INFO_STORAGE_KEY);;
    navigate('/')

  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <SpaIcon className='icon' />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Aarogya</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span></li>
          <p className="title">PATIENT</p>
          <li>
            <CalendarMonthIcon className='icon' />
            <span>Appointments</span></li>
          <Link to="/patients" style={{ textDecoration: "none" }}>
            <li>
              <AccessibilityNewIcon className='icon' />
              <span>Patients</span></li>
          </Link>
          <p className="title">LAB</p>
          <li>
            <BiotechIcon className='icon' />
            <span>Lab</span></li>
          <p className="title">STAFF</p>
          <Link to="/doctors" style={{ textDecoration: "none" }}>
            <li>
              <SupervisorAccountIcon className='icon' />
              <span>Doctors</span>
            </li>
          </Link>
          <p className="title">EXPORT</p>
          <li>
            <AssessmentIcon className='icon' />
            <span>Reports</span></li>
          <p className="title">USER</p>
          <li>
            <AccountBoxOutlinedIcon className='icon' />
            <span>Profile</span></li>
          <li onClick={logout}>
            <LogoutIcon className='icon' />
            <span>Logout</span></li>
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div >
  )
}
