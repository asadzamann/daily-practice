import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';



const Login = () => {
    const [user, setUser] = useState(null);
    

    const googleProvider = new GoogleAuthProvider();
    const googleClickHandler = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log('check result', result.user);
            setUser(result.user)
        })
        .catch(error => {
            console.log('check error', error);
        })
    }
    const signoutHandler = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign Out Successful");
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={googleClickHandler}>Sign in with Google</button>
            <button onClick={signoutHandler}>Sign Out</button>
            {user && <div>
          <h2>Name: {user?.displayName}</h2>
            <h2>Email: {user?.email}</h2>
            <img src={user.photoURL} alt="" />
            </div>}
          
        </div>
    );
};

export default Login;