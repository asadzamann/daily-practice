import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContexts/AuthContext';
import { use } from 'react';


const Register = () => {
    const {createUser} = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then (result => {
            console.log('check result', result)
        })
        .catch(error => {
            console.log('check error here buddy', error)
        })
    
}
    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     console.log("registration clicked", e.target.name.value, e.target.email.value, e.target.password.value)
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;


    //     createUserWithEmailAndPassword(auth, email, password )
    //     .then(result => {
    //         console.log('check result', result.user);
    //     })
    //     .catch(error => {
    //         console.log('Error Found, Check please', error)
    //     })
    
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <h1 className="text-5xl font-bold">Register now!</h1>
                                    {/* name field */}
                                    <label className="label">Name</label>
                                    <input type="text" className="input" placeholder="Name" name='name'/>
                                    {/* email field */}
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email'/>
                                    {/* password field */}
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' />

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