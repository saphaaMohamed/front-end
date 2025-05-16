import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets/frontend_assets/assets';
const LoginPopup = ( setShowLogin) => {
    const[currState,setCurrState]= useState("singup");
  return (
    <div className='login-popup'>
    <form className ='login-popup-container'> 
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false) } src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"? <input type="text" placeholder='Your name' />: <></>}
      
            <input type="password" placeholder='Password' />
            <input type="email" placeholder='email' />
            </div>
            <button >{currState==="Sign Up" ? "Create account": "Login"} </button>
            <div className="log-inpopup-condition">
                <input type="checkbox" required />
                <p>By containing , i agree to the terms of use & privacy policy.</p>

            </div>
          {currState==="Login"
          ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :   <p>Already have an account? <span onClick={()=>setCurrState ("Login")}>Login  here</span></p>
            }
             
          
    </form>


    </div>
  )
}

export default LoginPopup
