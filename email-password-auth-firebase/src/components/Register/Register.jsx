import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // reset value 
        setSuccess(false);
      setError('');
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          console.log('after creation of new user' , result)
          setSuccess(true)
          e.target.reset();
        })
        .catch(error => {
          setError(error.message)
        })

        
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          {success && <p className='text-green-500'>Account created Successfully</p>}
          {error? <p className='text-red-700'>{error}</p> : ''}
        </fieldset>
        </form>
       
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;