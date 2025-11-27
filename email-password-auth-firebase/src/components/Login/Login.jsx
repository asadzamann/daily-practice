import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const emailRef = useRef();
    

    const handleLogin = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // reset values
        setSuccess(false)
        setError('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                if (!result.user.emailVerified) {
                    alert('To login Verify your Email Address');
                    return;
                }
                setSuccess(true)

            })
            .catch(error => {
                setError(error.message)
            })

       

    }

     const handleForgetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert("Please check your email")
        })
        .catch()
        }

    return (
        <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <label className="label" >Email</label>
                        <input name="email" type="email" className="input" ref={emailRef} placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>

                    </fieldset>
                    {success && <h4 className='text-green-600'>You are Successfully logged in!</h4>}
                    {error && <h4 className='text-red-600'>Worng Username or Password</h4>}
                </form>
                <h4>Don't have an account? Please <Link to={'/register'}><p className='text-blue-600 underline'>Register</p></Link></h4>

            </div>
        </div>
    );
};

export default Login;