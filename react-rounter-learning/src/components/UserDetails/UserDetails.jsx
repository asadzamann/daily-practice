import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {name, username, email, phone, website} = user;
    console.log('testing', name)
      const userStyle = {
        border: '4px solid yellow',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px'
    }
    return (
       <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h2>Username: {username}</h2>
            <h2>Website: {website}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>
        </div>
    );
};

export default UserDetails;