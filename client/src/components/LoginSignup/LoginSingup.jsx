import React from 'react'
import { useState } from 'react'
import './Login.css'

export default function LoginSingup() {
  const [Signup, setSignup] = useState("Sign up")
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = ({ currentTarget: input }) => {
		setLoginData({ ...loginData, [input.name]: input.value });
	};

  return (
    <div className='login-hero'>
        <div className='login-logo'>

        </div>

        <div className='login-continer'>
          <div className='login-header'>
            <div className='underline'> </div>
            <div className='login-text'>{Signup}</div>
            <div className='underline'> </div>
          </div>
          <div className='login-inputs'>
            {
            Signup === 'Login'? <div></div> :
            <div className='login-input'>
              <input type="text" placeholder='Username' />
            </div>
            }
             
            <div className='login-input'>
              <input type="text" placeholder='Email' />
            </div>  
            <div className='login-input'>
              <input type="text" placeholder='Password' />
            </div>
          </div>
          {
            Signup === 'Sign up'? <div></div> : <div className='forgot-pass'>
            Have you lost yor Password?
            <span>Click here!</span>  
          </div>
          }
          
          <div className='login-submit'>
            <div className={Signup === 'Login' ? 'submit login' : 'submit'} onClick={() => setSignup('Sign up')}>Sign Up</div>
            <div className={Signup === 'Sign up' ? 'submit signup' : ' submit'} onClick={() => setSignup('Login')}>Login</div>
          </div>
        </div>
    </div>
  )
} 
