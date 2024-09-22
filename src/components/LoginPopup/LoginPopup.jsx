import React, { useState } from 'react';
import './LoginPopup.css';
import food from "../../assets/food_1.png";
import { IoMdClose } from "react-icons/io";

const LoginPopup = ({ setShowLogin }) => {
  const [isLogin, setisLogin] = useState('login');
  const [isVisibleOtp, setisVisibleOtp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    otp: ''
  });

  const toggleForm = () => {
    setisLogin(isLogin === 'login' ? 'signup' : 'login');
  };

  const toggleOtp = () => {
    setisVisibleOtp(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    
    

    <div className="login-popup-container">
        {!isVisibleOtp ?(  <div className="login-popup">
        <div className="form-type">
          <div className="leftside">
            <p id="login">{isLogin === 'login' ? 'Login' : 'Sign Up'}</p>
            <p>
              {isLogin === 'login' ? 'Or,' : 'Already have an account,'}
              <span style={{ color: '#13B251', cursor: 'pointer' }} onClick={toggleForm}>
                {isLogin === 'login' ? 'Create a new Account' : 'Login'}
              </span>
            </p>
          </div>
          <img src={food} alt="food img" />
        </div>

        <div className="Login-signup-form">
          {isLogin === 'signup' && (
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          )}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {isLogin === 'signup' && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          )}
          <button onClick={toggleOtp}>{isLogin === 'login' ? 'Send OTP' : 'Continue'}</button>
        </div>
        <p>
          By clicking on {isLogin === 'login' ? 'Login' : 'Sign Up'}, I accept the Terms & Conditions & Privacy Policy
        </p>

        <IoMdClose className='closeform' onClick={() => setShowLogin(false)} />
      </div>):(      <div className="login-popup">
          <div className="form-type">
            <div className="leftside">
              <p id="login">Enter OTP</p>
              <p>We have sent an OTP to your phone number</p>
            </div>
            <img src={food} alt="food img" />
          </div>

          <div className="Login-signup-form">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="otp"
              placeholder="Enter One Time Password"
              value={formData.otp}
              onChange={handleInputChange}
            />
            <button>Verify OTP</button>
          </div>
          <p>Resend OTP in 8 Seconds <span>Resend</span></p>

          <IoMdClose className='closeform' onClick={() => setShowLogin(false)} />
        </div>
  )}


  
    </div>
  );
};

export default LoginPopup;
