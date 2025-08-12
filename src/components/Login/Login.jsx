import React, { useState } from 'react'
import './Login.css'
function Login() {

  const [isLogin,setIsLogin]= useState(true);

  const toggleForm=()=>{
    setIsLogin(!isLogin);
  }

  return (
    <>
    <div className='outerform'>
      <h2 className='line'>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
    <form>
        <label htmlFor='email'>Email</label>
        <input className="input-field" id='email'
        required type='email' 
        placeholder='Enter your email'/><br/><br/>
       <label htmlFor='password'>Password</label>
        <input className='password' required type='password' 
        placeholder='Enter your password'/><br/><br/>

        {!isLogin && (
          <>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input className='password' type='confirm-password' 
            placeholder='Confirm your password'/><br/><br/>
          </>

        ) }
        {isLogin && (
          <>
            <div className='fgp'>
                <a href='#'>Forgot Password</a>
            </div>
          </>
        )}
        
        <button className='btn' 
        type='submit'>{isLogin? 'Login' : 'Signup'}</button>
    </form>
    <>
      <p>
      {isLogin ? "Don't have an account?" : "Already have an account"}{" "}
        <a href='#' onClick={toggleForm}>
          {isLogin ? 'Signup':'Login'}
        </a>
      </p>
    </>
   
    {/* <button  className='btn-2' type='button'>
      <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
      Log in with Google
    </button> */}
    </div>
    </>
  )
}

export default Login