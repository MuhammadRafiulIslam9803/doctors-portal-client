import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hook/useToken';

const Registration = () => {
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate()

    const { registrationUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
    }

    const handleRegistration = data => {
        setSignUPError('')
        registrationUser(data.email, data.password).then(userCredential => {
            const user = userCredential.user
            console.log(user)
            toast.success('Registration Completed Successfully.')

            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email);
                })
                .catch(err => console.log(err));
        })
            .catch((error) => {
                const errorMessage = error.message;
                setSignUPError(errorMessage)
            })
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
    }


    return (
        <div className="registration-container flex justify-center items-center min-h-screen bg-gray-100">
            <div className="registration-form w-96 p-7 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-neutral mb-6">Registration</h2>
                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
                    <div className="form-control">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input rounded-lg input-bordered w-full"
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input rounded-lg input-bordered w-full"
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters or longer" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters" }
                            })}
                            className="input rounded-lg input-bordered w-full"
                        />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </div>
                    <input
                        className="btn btn-neutral rounded-lg w-full text-xl"
                        value="Sign up"
                        type="submit"
                    />
                    {signUpError && <p className="text-red-600">{signUpError}</p>}
                </form>
                <p className="mt-4 text-center text-gray-800">
                    Already have an account? <Link to="/login" className="text-primary">Login here</Link>
                </p>
            </div>
        </div>

    );
};

export default Registration;