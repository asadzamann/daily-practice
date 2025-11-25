import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.config';



const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const googleClickHandler = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={googleClickHandler}>Sign in with Google</button>
        </div>
    );
};

export default Login;