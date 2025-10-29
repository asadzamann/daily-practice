import React from 'react';
import './user.css'
import { Link } from 'react-router';

const User = ({user}) => {
    console.log(user);
    const {id,name, phone, website, email} = user;
    const userStyle = {
        border: '4px solid yellow',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Website: {website}</h2>
            <h2>Email: {email}</h2>
           <Link to={`${id}`}>Show Details</Link>
        </div>
    );
};

export default User;