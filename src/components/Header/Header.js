import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import icon from '../../image/Untitled-115.png'

const Header = () => {
    return (
        <div className='nav-item'>
            <img src={icon} alt="" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Team'>Team</Link>

                <Link to='/About'>About</Link>
                
            </nav>
            
        </div>
    );
};

export default Header;