import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const[currentState, setCurrentState] = useState('Login')
  const{token, setToken, navigate, backendUrl} = useContext(ShopContext);

  const[name, setName] = useState('');
  const[password, setPassword] = useState('');
  const[email, setEmail] = useState('');

  const onSubmitHandler = async (event) =>{
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (currentState === 'Sign Up' && !name) {
      toast.error('Please enter your name');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    try {
      console.log('Attempting:', currentState, 'with backend URL:', backendUrl);

      if (currentState === 'Sign Up') {
        console.log('Registering user:', { name, email, password: '***' });
        const response = await axios.post(backendUrl + "/api/user/register", {name, email, password})
        console.log('Registration response:', response.data);

        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success('Account created successfully!')
          navigate('/')
        } else{
          toast.error(response.data.message)
        }

      } else{
        console.log('Logging in user:', { email, password: '***' });
        const response = await axios.post(backendUrl + "/api/user/login", {email,password})
        console.log('Login response:', response.data);

        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Login successful!')
          navigate('/')
        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.error('Request failed:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        toast.error(error.response.data.message || 'Server error occurred');
      } else if (error.request) {
        console.error('No response received:', error.request);
        toast.error('Cannot connect to server. Please check if the backend is running.');
      } else {
        console.error('Error:', error.message);
        toast.error(error.message);
      }
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
     {currentState === 'Login' ? '' : <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />} 
      <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your Password?</p>
          {
            currentState === 'Login' ?
            <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> :
            <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
          }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login