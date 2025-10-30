import React, { Suspense, useState } from 'react';
import './user.css'
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
       const {id,name, phone, website, email} = user;
    const [showinfo, setShowInfo] = useState(false);
    const [visit , setVisit] = useState(false);
    const location = useLocation();
    console.log(location)
    if(visit === true){
        return <Navigate to={'/'}></Navigate>
    }
    const userPromise2 = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json())
 
    const userStyle = {
        border: '4px solid yellow',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
           <Link to={`${id}`}>Show Details</Link>
           <button onClick={() => setShowInfo(!showinfo)}>{showinfo ? 'Hide' : 'Show'} Info</button>
           {
            showinfo && <Suspense fallback={<h3>User is loading...</h3>}>
                <UserDetails2 userPromise2={userPromise2}></UserDetails2>
            </Suspense>
           }
           <button onClick={() => setVisit(true)}>Visit Home</button>
        </div>
    );
};

export default User;