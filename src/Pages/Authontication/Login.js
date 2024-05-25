import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hook/useToken';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { signInUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('')
        console.log(data)
        signInUser(data.email, data.password)
            .then(userCredential => {
                const user = userCredential.user
                toast.success('Successfully Login.')
                setLoginUserEmail(data.email);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage)
            })
    }



    return (
        <div className="login-container flex justify-center items-center min-h-screen bg-gray-100">
            <div className="login-form w-96 p-7 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-neutral mb-6">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    <div className="form-control">
                        <label className="label">Email</label>
                        <input
                            type="text"
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
                                minLength: { value: 6, message: "Password must be 6 characters or longer" }
                            })}
                            className="input rounded-lg input-bordered w-full"
                        />
                        <p className="label">
                            <span className="label-text text-accent">Forget Password?</span>
                        </p>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </div>
                    <input
                        className="btn btn-neutral rounded-lg w-full text-xl"
                        value="Login"
                        type="submit"
                    />
                    {loginError && <p className="text-red-600">{loginError}</p>}
                </form>
                <p className="mt-4 text-center text-gray-800">
                    New to Doctors Portal? <Link to="/signup" className="text-primary">Create new Account</Link>
                </p>
            </div>
        </div>

    );
};


export default Login;