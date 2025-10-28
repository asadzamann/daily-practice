import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>I am header</h1>
            <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobiles'>Mobiles</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/cameras'>Cameras</NavLink>
            <NavLink to='/monkeys'>Monkeys</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;