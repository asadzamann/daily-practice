import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router';


const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError('Password should be minimum 8 characters, at least 1 letter & 1 number');
      return;
    }
    // reset value 
    setSuccess(false);
    setError('');

    if(!terms){
      setError("Please Accept Our Terms and Conditions");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log('after creation of new user', result)
        setSuccess(true)
        sendEmailVerification(result.user)
        .then(
          () => {
            alert("Please verify your email address");
          }
        )
        e.target.reset();
           // update profile
      const profile = {
         displayName: name,
         photoURL: photo
      }

      updateProfile(result.user , profile)
      .then(() => {}
      )
      .catch()

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
                  {/* Name */}
                  <label className="label">Name</label>
                  <input type="name" className="input" name='name' placeholder="Name" />
                  {/* Photo URL */}
                  <label className="label">PhotoURL</label>
                  <input type="text" className="input" name='photo' placeholder="Photo URL" />
                  {/* Email */}
                  <label className="label">Email</label>
                  <input type="email" className="input" name='email' placeholder="Email" />
                  <label className="label">Password</label>
                  <div className='relative'>
                    <input type={showPassword ? 'text' : 'password'} className="input" name='password' placeholder="Password" />
                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-2 right-7">{showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}</button>
                    <label className="label">
                      <input type="checkbox" defaultChecked name='terms' className="checkbox" />
                      Accept our terms and condition
                    </label>
                  </div>

                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button className="btn btn-neutral mt-4">Register</button>
                  {success && <p className='text-green-500'>Account created Successfully</p>}
                  {error ? <p className='text-red-700'>{error}</p> : ''}
                </fieldset>
                <h4>Already have an account? Please <Link to={'/login'}><p className='text-blue-600 underline'>Login</p></Link></h4>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;