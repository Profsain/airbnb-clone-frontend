
import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                className='header_icon'
                src='https://i.postimg.cc/mk2F48v3/airbnb-logo.png'
                alt='airbnb-logo'
            />
            </Link>
            <div className='header_center'>
                <input type='text' />
                <SearchIcon />
            </div>
            <div className='header_right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />

            </div>
        </div>
    )
}

export default Header
