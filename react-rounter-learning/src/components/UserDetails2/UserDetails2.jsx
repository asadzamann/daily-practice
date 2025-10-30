import React, { use } from 'react';

const UserDetails2 = ({userPromise2}) => {
    const userDetails2 = use(userPromise2);
    const {name, username, email, phone, website, id} = userDetails2;
    console.log(name)
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
        </div>
    );
};

export default UserDetails2;