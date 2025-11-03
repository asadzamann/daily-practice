import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Sorry for the Bad UI</h2>
            <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobiles'>Mobiles</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;