import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const {signInUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
 
    const from = location.state?.from?.pathname || '/';
    const handleLogin = data =>{
        setLoginError('')
        console.log(data)
        signInUser(data.email ,data.password)
        .then(userCredential=>{
            const user = userCredential.user
            toast.success('Successfully Login.')

            navigate( from, {replace : true})

        })
        .catch((error) => {
            const errorMessage = error.message;
            setLoginError(errorMessage)
          })
    }

   

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-neutral font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text" placeholder='Your Email'
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
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input rounded-lg input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-neutral rounded-lg w-full text-xl mt-3 mb-2' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-primary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline rounded-lg w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};


export default Login;