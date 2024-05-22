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
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-neutral font-bold text-center'>Registration</h2>
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" placeholder='Your Name'
                            {...register("name", {
                                required: "Name Address is required"
                            })}
                            className="input rounded-lg input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Your Email'
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input rounded-lg input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Your Password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input rounded-lg input-bordered w-full max-w-xs mb-5" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-neutral rounded-lg w-full text-xl' value="Sign up" type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p className='mt-1'>Alredy have an account ?<Link className='text-primary' to="/login">Login here </Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline rounded-lg w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Registration;