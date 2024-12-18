// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { FiShoppingBag } from "react-icons/fi";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { RiMenu3Fill } from "react-icons/ri";
// import { IoMdClose } from "react-icons/io";
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import byandselllogo from '../../assets/byandselllogo.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { isLoggedIn, isRestaurantLoggedIn } from '../../utils';
// import { clearUser } from '../../store/slices/authSlice';
// import { handleSignOut } from '../../services/firebase/auth';
// import { AccountCircle } from '@mui/icons-material';
// import { useFetchUserData } from '../../hooks/useFetchUserData';
// import { Button } from '../Buttons/Button';
// import CurrencyConverter from '../common/CurrencyConverter';
// import LoginIcon from '@mui/icons-material/Login';
// import TranslateComponent from '../common/LanguageConverter';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import { FORM_TYPES } from '../../utils/constants';
// import Person2Icon from '@mui/icons-material/Person2';

// const Navbar = ({ setShowLogin, setFormType }) => {

//   const { isAuthenticated } = useSelector((state) => state.auth);
//   let userData = useFetchUserData()
//   let isUserLoggedIn = isLoggedIn();

//   const dispatch = useDispatch()

//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
//   const [isTab, setIsTab] = useState(window.innerWidth < 1080);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1080);
//       setIsTab(window.innerWidth < 1200);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMobileOpen(!isMobileOpen);
//   };

//   const logout = async () => {
//     await handleSignOut()
//     dispatch(clearUser());
//   };

//   return (
//     <div className="py-4 justify-content-between align-items-center gap-4 d-flex main_navbar_con">

//       <div>
//         <Link to="/">
//           <img src={isTab ? byandselllogo : logo} alt="Logo"
//             className={isTab ? 'nav-logo-mobile' : 'nav-logo-desktop'} />
//         </Link>
//       </div>

//       <div className='d-flex  align-items-center justify-content-between gap-4 text-nowrap'>
//         <div className='pointer' onClick={() => navigate("/adsListing")}>Ads Listing</div>
//         <div className='pointer' onClick={() => {
//           if (isUserLoggedIn) {
//             navigate("/myAds")
//           }
//           else {
//             setFormType(FORM_TYPES.login)
//             setShowLogin(true)
//           }
//         }}>My Ads</div>

//         <Button onClick={() => {
//           if (isUserLoggedIn) {
//             navigate("addItem")
//           }
//           else {
//             setShowLogin(true)
//             setFormType(FORM_TYPES.login)
//           }

//         }} primary title={"+ Place An Add"}></Button>

//         <div>Blog</div>

//         {!isUserLoggedIn &&
//           <>
//             <div className='loginBtn' onClick={() => {
//               setShowLogin(true)
//               setFormType(FORM_TYPES.login)
//             }} ><LoginIcon /> Login</div>
//             <div className="loginBtn" onClick={() => {
//               setShowLogin(true)
//               setFormType(FORM_TYPES.signUp)
//             }}>
//               <GroupAddIcon />
//               <span>Register</span>
//             </div>
//           </>
//         }

//         {isUserLoggedIn && <div className='loginBtn' onClick={logout}><LoginIcon /> Logout</div>}
//         {isUserLoggedIn && <div className='loginBtn' onClick={() => navigate("/myAds")}><Person2Icon /> My Account</div>}

//         <div style={{ width: '120px' }}>
//           <TranslateComponent />
//         </div>
//         <CurrencyConverter />

//       </div>

//       {/* Mobile Menu Slider */}
//       {isMobileOpen && (
//         <div className="mobile-menu">
//           <p>Home</p>
//           <p>Services</p>
//           {isAuthenticated && <p onClick={() => setShowLogin(true)}>Register<AiOutlineUserAdd className="register-icon" /></p>}
//           <IoMdClose onClick={toggleMenu} className="closemenu" />
//         </div>

//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { FiShoppingBag } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import byandselllogo from '../../assets/byandselllogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useIsUserLoggedIn } from '../../utils'
import { clearUser } from '../../store/slices/authSlice'
import { handleSignOut } from '../../services/firebase/auth'
import { Button } from '../Buttons/Button'
import LoginIcon from '@mui/icons-material/Login'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import TranslateComponent from '../common/LanguageConverter'
import CurrencyConverter from '../common/CurrencyConverter'
import { FORM_TYPES } from '../../utils/constants'

const Navbar = ({ setShowLogin, setFormType }) => {
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280)
  const [isSidebarAvailable, setIsSidebarAvailable] = useState(
    window.innerWidth < 992
  )
  let isUserLoggedIn = useIsUserLoggedIn()

  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1280
      setIsMobile(isNowMobile)
      const isNowSidebarAvailable = window.innerWidth < 992
      setIsSidebarAvailable(isNowSidebarAvailable)

      // Close mobile menu if transitioning to desktop view
      if (!isNowMobile) {
        setIsMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen)

  const logout = async () => {
    await handleSignOut()
    dispatch(clearUser())
  }

  return (
    <div className='navbar-container d-flex align-items-center justify-content-between px-0 py-3'>
      {/* Logo */}
      <Link to='/'>
        <img
          src={isMobile ? byandselllogo : logo}
          alt='Logo'
          className={isMobile ? 'nav-logo-mobile' : 'nav-logo-desktop'}
        />
      </Link>

      {/* Desktop Menu */}
      <div className={`d-none d-lg-flex align-items-center gap-xl-4 gap-2`}>
        <Link to='/adsListing' className='nav-link'>
          Ads Listing
        </Link>
        <div
          className='nav-link pointer'
          onClick={() => {
            isUserLoggedIn
              ? navigate('/myAds')
              : setShowLogin(true) && setFormType(FORM_TYPES.login)
          }}
        >
          My Ads
        </div>
        <Button
          primary
          title='+ Place An Ad'
          onClick={() => {
            isUserLoggedIn
              ? navigate('addItem')
              : setShowLogin(true) && setFormType(FORM_TYPES.login)
          }}
        />
        <Link to='/blog' className='nav-link'>
          Blog
        </Link>
        {!isUserLoggedIn ? (
          <>
            <div
              className='nav-link pointer'
              onClick={() => {
                setFormType(FORM_TYPES.login)
                setShowLogin(true)
              }}
            >
              <LoginIcon /> Login
            </div>
            <div
              className='nav-link pointer'
              onClick={() => {
                setFormType(FORM_TYPES.signUp)
                setShowLogin(true)
              }}
            >
              <GroupAddIcon /> Register
            </div>
          </>
        ) : (
          <>
            <div className='nav-link pointer' onClick={logout}>
              <LoginIcon /> Logout
            </div>
            <div
              className='nav-link pointer'
              onClick={() => navigate('/myAds')}
            >
              My Account
            </div>
          </>
        )}
        <CurrencyConverter />
      </div>
      <div
        className={`d-flex gap-xl-4 gap-2 align-items-center ${
          isSidebarAvailable && 'w-100 justify-content-end pe-3'
        }`}
      >
        <div style={{ width: '120px', height: '45px', overflow: 'hidden' }}>
          <TranslateComponent />
        </div>
      </div>

      {/* Mobile Menu Toggle */}

      <RiMenu3Fill
        className='d-lg-none nav-icon pointer'
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className='mobile-menu'>
          <IoMdClose className='closemenu pointer' onClick={toggleMenu} />
          <Link to='/adsListing' className='nav-link' onClick={toggleMenu}>
            Ads Listing
          </Link>
          <div
            className='nav-link'
            onClick={() => {
              toggleMenu()
              isUserLoggedIn
                ? navigate('/myAds')
                : setShowLogin(true) && setFormType(FORM_TYPES.login)
            }}
          >
            My Ads
          </div>
          <Button
            primary
            title='+ Place An Ad'
            onClick={() => {
              toggleMenu()
              isUserLoggedIn
                ? navigate('addItem')
                : setShowLogin(true) && setFormType(FORM_TYPES.login)
            }}
          />
          <Link to='/blog' className='nav-link' onClick={toggleMenu}>
            Blog
          </Link>
          {!isUserLoggedIn ? (
            <>
              <div
                className='nav-link pointer'
                onClick={() => {
                  setFormType(FORM_TYPES.login)
                  setShowLogin(true)
                  toggleMenu()
                }}
              >
                <LoginIcon /> Login
              </div>
              <div
                className='nav-link pointer'
                onClick={() => {
                  setFormType(FORM_TYPES.signUp)
                  setShowLogin(true)
                  toggleMenu()
                }}
              >
                <GroupAddIcon /> Register
              </div>
            </>
          ) : (
            <>
              <div className='nav-link pointer' onClick={logout}>
                <LoginIcon /> Logout
              </div>
              <div
                className='nav-link pointer'
                onClick={() => navigate('/myAds')}
              >
                My Account
              </div>
            </>
          )}
          <div>
            <CurrencyConverter />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
