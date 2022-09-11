import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="items">
        <div className="item">
          <LanguageRoundedIcon className='icon' />
          English
        </div>
        <div className="item">
          <NotificationsRoundedIcon className='icon' />
        </div>
        <div className="item">
          <AccountCircleRoundedIcon className='icon' />
        </div>
      </div>
    </div>
  )
}
