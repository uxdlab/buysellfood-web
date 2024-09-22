import React, { useState } from 'react';
import './LoginPopup.css';
import food from "../../assets/food_1.png";
import { IoMdClose } from "react-icons/io";

const LoginPopup = ({setShowLogin}) => {

  const [isLogin, setisLogin] = useState('login');

  const toggleForm = () => {
    setisLogin(isLogin === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="login-popup-container">
      <div className="login-popup">
        <div className="form-type">
          <div className="leftside">
            <p id="login">{isLogin === 'login' ? 'Login' : 'Sign Up'}</p>
            <p>
              {isLogin === 'login' ? 'Or,': 'Already have an account,'}
              <span style={{ color: '#13B251', cursor: 'pointer' }} onClick={toggleForm}>
                {isLogin === 'login' ? 'Create a new Account' : 'Login'}
              </span>
            </p>
          </div>
          <img src={food} alt="food img" />
        </div>

        <div className="Login-signup-form">
          {isLogin === 'signup' && <input type="text" placeholder="Enter Name" />}
          <input type="text" placeholder="Phone Number" />
          {isLogin === 'signup' && <input type="email" placeholder="Email" />}
          <button>{isLogin === 'login' ? 'Send OTP' : 'Continue'}</button>
        </div>
        <p>By clicking on {isLogin === 'login' ? 'Login' : 'Sign Up'}, I accept the Terms & Conditions & Privacy Policy</p>
        
        <IoMdClose className='closeform' onClick={() => {setShowLogin(false)}}/>

      </div>
    </div>
  );
};

export default LoginPopup;
