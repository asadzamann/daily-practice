import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const usersData = useLoaderData();

    return (
        <div>
            <h1>This is users</h1>
            {usersData.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;