import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log("registration clicked")
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <h1 className="text-5xl font-bold">Register now!</h1>
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />

                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>

                            </form>
                                <p>Already have an Account? <Link className='text-blue-800 underline' to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;