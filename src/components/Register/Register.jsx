import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { UserContext } from '../Home/Home';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    // console.log(regex.test('abc23@'));

    const handleSignup = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value
        const password = e.target.password.value
        if (password.length < 6) {
            setError('Password should be 6 characters or longer')

            return;
        }
        if (!regex.test(password)) {
            setError('password should contain special character')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                // navigate('/')
                toast.success('User Account Created Successfully')

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('verification mail sent');
                    })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-96 bg-white shadow-xl p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSignup}>
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
                            type={showPassword ? 'text' : 'password'}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            name='password'
                            required
                        />
                        <div onClick={() => setShowPassword(!showPassword)} role='button' className='absolute top-48 right-8'>
                            {
                                showPassword ? <FaEyeSlash className='text-xl' /> : <IoEyeSharp className='text-xl' />
                            }
                        </div>
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;