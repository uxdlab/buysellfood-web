import React, { useState } from 'react'
import './LoginPopup.css'
import food from '../../assets/food_1.png'
import { IoMdClose } from 'react-icons/io'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginForm'
import { handleSignIn, handleSignUp } from '../../services/firebase/auth'
import { FIREBASE_ERRORS, USER_ROLES } from '../../utils/constants'
import { addDataWithId } from '../../services/firebase/setData'
import { getDocData } from '../../services/firebase/getData'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/authSlice'
import { loader, toast } from '../../utils'
import { ForgotPassword } from './ForgotPassword'

const LoginPopup = ({ setShowLogin, formType, setFormType }) => {
  const [error, setError] = useState({
    error: false,
    errorMsg: ''
  })
  const FORM_TYPES = {
    login: 'Login',
    signUp: 'Sign Up',
    forgotPassword: 'ForgotPassword'
  }
  const dispatch = useDispatch()

  function toggleForm () {
    setFormType(
      formType === FORM_TYPES.login ? FORM_TYPES.signUp : FORM_TYPES.login
    )
  }

  async function signUp (data, role) {
    try {
      let { email, password } = data
      loader.start()
      let res = await handleSignUp(email, password)
      delete data.password

      const userData = {
        ...data,
        isPaid: false,
        planExpireDate: null,
        role
      }

      console.log(userData)
      await addDataWithId('users', res?.uid, userData)
      console.log('User created created')
      // setFormType(FORM_TYPES.login)
      setShowLogin(false)
      window.location.reload()
    } catch (error) {
      console.log(error)
      if (error.message === FIREBASE_ERRORS.userAlreadyExists) {
        toast.error('User already exists')
      }
    } finally {
      loader.stop()
    }
  }
  async function login (data) {
    console.log(data)
    setError({
      error: false,
      errorMsg: ''
    })
    const { email, password } = data
    try {
      loader.start()
      let res = await handleSignIn(email, password)

      dispatch(setUser({ email: res.email, uid: res.uid }))
      let response = await getDocData('users', res.user.uid)
      localStorage.setItem('userData', JSON.stringify(response))
      setShowLogin(false)
    } catch (error) {
      console.log(error)
      if (error.message === FIREBASE_ERRORS.invalidCredential) {
        setError({
          error: true,
          errorMsg: 'Invalid Credencial'
        })
      }
    } finally {
      loader.stop()
    }
  }
  return (
    <div className='login-popup-container'>
      <div className='login-popup'>
        <div className='form-type pt-5'>
          <div className='leftside'>
            <p id='login'>{formType}</p>
            <p>
              {formType === FORM_TYPES.login
                ? 'Or, '
                : 'Already have an account,'}
              <span
                style={{ color: '#13B251', cursor: 'pointer' }}
                onClick={toggleForm}
              >
                {formType === FORM_TYPES.login
                  ? 'Create a new Account'
                  : 'Login'}
              </span>
            </p>
          </div>
          <img src={food} alt='food img' />
        </div>
        <div className='Login-signup-form'>
          {/* form for sign up  */}
          {formType === FORM_TYPES.signUp && (
            <SignupForm signUpFor={USER_ROLES.user} onSubmit={signUp} />
          )}

          {formType === FORM_TYPES.login && (
            <LoginForm error={error} onSubmit={login} onForgotPasswordClick={()=>setFormType(FORM_TYPES.forgotPassword)} />
          )}
          {formType === FORM_TYPES.forgotPassword && (
            <ForgotPassword onLoginClick={()=>setFormType(FORM_TYPES.login)} />
          )}
        </div>
        <p>
          By clicking on {formType === 'login' ? 'Login' : 'Sign Up'}, I accept
          the Terms & Conditions & Privacy Policy
        </p>
        <IoMdClose className='closeform' onClick={() => setShowLogin(false)} />
      </div>
    </div>
  )
}

export default LoginPopup
