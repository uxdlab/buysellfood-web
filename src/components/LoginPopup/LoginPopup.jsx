import React, { useState } from 'react';
import './LoginPopup.css';
import food from "../../assets/food_1.png";
import { IoMdClose } from "react-icons/io";
import { SignupForm } from './SignupForm';
import { LoginForm } from './LoginForm';
import { handleSignIn, handleSignUp } from '../../services/firebase/auth';
import { FIREBASE_ERRORS, USER_ROLES } from '../../utils/constants';
import { addDataWithId } from '../../services/firebase/setData';
import { getDocData } from '../../services/firebase/getData';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/authSlice';

const LoginPopup = ({ setShowLogin }) => {

  const FORM_TYPES = {
    login: 'Login',
    signUp: 'Sign Up',
    restaurantType: 'Restaurant Sign Up'
  }
  const dispatch = useDispatch()

  const [formType, setFormType] = useState(FORM_TYPES.login)
  function toggleForm() {
    setFormType(formType === FORM_TYPES.login ? FORM_TYPES.signUp : FORM_TYPES.login)
  }

  async function signUp(data, role) {

    try {
      let { email, password } = data
      let res = await handleSignUp(email, password)
      delete data.password
      const userData = { ...data, role }
      console.log(userData)
      await addDataWithId("users", res?.uid, userData)
      console.log("User created created")

    } catch (error) {
      console.log(error)
      if (error.message === FIREBASE_ERRORS.userAlreadyExists) {
        alert("User already exists")
      }
    }


  }
  async function login(data) {
    console.log(data)
    const { email, password } = data;
    try {
      let res = await handleSignIn(email, password)
      dispatch(setUser({ email: res.email, uid: res.uid }))
      let response = await getDocData("users", res.user.uid)
      localStorage.setItem("userData", JSON.stringify(response))
      setShowLogin(false)

    } catch (error) {

      if (error.message === FIREBASE_ERRORS.invalidCredential) {
        alert("Invalid Credencials")
      }
      console.log(error.message)
    }
  }
  return (

    <div className="login-popup-container">
      <div className="login-popup">
        <div className="form-type pt-5">
          <div className="leftside">
            <p id="login">{formType}</p>
            <p>
              {formType === FORM_TYPES.login ? 'Or, ' : 'Already have an account,'}
              <span style={{ color: '#13B251', cursor: 'pointer' }} onClick={toggleForm}>
                {formType === FORM_TYPES.login ? 'Create a new Account' : 'Login'}
              </span>
            </p>
            {(formType !== FORM_TYPES.restaurantType && formType !== FORM_TYPES.login) && <p style={{ color: '#13B251', cursor: 'pointer' }} onClick={() => {
              setFormType(FORM_TYPES.restaurantType)
            }
            }>Register Restaurant</p>}
          </div>
          <img src={food} alt="food img" />
        </div>
        <div className="Login-signup-form">

          {/* form for sign up  */}
          {formType === FORM_TYPES.signUp && <SignupForm signUpFor={USER_ROLES.user} onSubmit={signUp} />}
          {formType === FORM_TYPES.restaurantType && <SignupForm signUpFor={USER_ROLES.restaurant} onSubmit={signUp} />}
          {/* form for login  */}
          {formType === FORM_TYPES.login && <LoginForm onSubmit={login} />}
        </div>
        <p>
          By clicking on {formType === 'login' ? 'Login' : 'Sign Up'}, I accept the Terms & Conditions & Privacy Policy
        </p>
        <IoMdClose className='closeform' onClick={() => setShowLogin(false)} />
      </div>
    </div>
  );
};

export default LoginPopup;
