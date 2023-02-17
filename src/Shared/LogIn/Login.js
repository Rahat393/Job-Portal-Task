import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate  } from 'react-router-dom';

import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const navigate = useNavigate()


  const handleLogin = data => {
    setLoginError('')
    signIn(data.email, data.password)
    
    .then(result => {
        console.log(result);
        setLoginUserEmail(data.email)
        navigate('/')
    })
    .catch(error => {
        console.log(error)
        setLoginError(error.message)

    })
     
   
  }
  return (
    <div className='h-[650px]   mx-auto flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                // minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-[#f36f21] hover:bg-[#f36e21c7]  w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>   {loginError}</p>}
                    </div>
                </form>
                <p>New to Job Portal <Link to="/signup" className='text-secondary' >Create new Account</Link></p>
                 
             </div>
        </div>
  );
};

export default Login;