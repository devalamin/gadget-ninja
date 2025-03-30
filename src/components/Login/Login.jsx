import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import { UserContext } from '../Home/Home';


const Login = () => {

    const [error, setError] = useState("");

    const { setUser } = useContext(UserContext)
    

    const handleLogin = (e) => {
        e.preventDefault();

    };

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-96 bg-white shadow-xl p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your email"
                            name='email'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            name='password'
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mb-2">Login</button>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full mb-2">Login with Google <FaGoogle className='text-[#EA4335]' /> </button>
                <button className="btn btn-outline w-full mb-2">Login with GitHub <FaGithub /></button>
                <button className="btn btn-outline w-full mb-2">Login with Twitter <FaTwitter className='text-[#1DA1F2]' /></button>
                <p className='text-red-600'>{error}</p>
                <Link to='/register'><button className="btn btn-link w-full">Create New Account</button></Link>
            </div>
        </div>
    );
};

export default Login;