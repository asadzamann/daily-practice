import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData)
    return (
        <div>
            <h1>This is users</h1>
        </div>
    );
};

export default Users;