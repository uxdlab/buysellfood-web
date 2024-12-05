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
// import { isRestaurantLoggedIn, isUserLoggedIn } from '../../utils';
// import { clearUser } from '../../store/slices/authSlice';
// import { handleSignOut } from '../../services/firebase/auth';
// import { AccountCircle } from '@mui/icons-material';
// import { useFetchUserData } from '../../hooks/useFetchUserData';

// const Navbar = ({ setShowLogin }) => {

//   const { isAuthenticated } = useSelector((state) => state.auth);
//   let userData = useFetchUserData()



//   const dispatch = useDispatch()


//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1080);
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
//     <div className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-left">
//           <Link to="/">
//             <img src={isMobile ? byandselllogo : logo} alt="Logo"
//               className={isMobile ? 'nav-logo-mobile' : 'nav-logo-desktop'} />
//           </Link>
//           <div className="nav-location">
//             <span className="location-name">Dublin</span>
//             <span className="location-address">Daniel Street  1081/11</span>
//           </div>
//         </div>

//         <div className="navbar-center">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/services" className="nav-link">Our Services</Link>

//           {isAuthenticated ?
//             <div className='pointer' onClick={logout}>Logout</div>
//             :
//             <div className="nav-register" onClick={() => setShowLogin(true)}>
//               <AiOutlineUserAdd className="register-icon" />
//               <span>Register</span>
//             </div>

//           }
//           {isRestaurantLoggedIn() && <div className='pointer' onClick={() => navigate("addItem")}>&nbsp;&nbsp;&nbsp;&nbsp;Add Item</div>}

//         </div>

//         <div className="navbar-right d-flex align-items-start">
//           <div onClick={() => navigate('/cart')} className="nav-icon">
//             <FiShoppingBag />
//           </div>


//           <Link to={"/profile"} className='unstyled'>
//             <div className='pointer d-flex flex-column align-items-center'>
//               <AccountCircle className='mt-2' />
//               <div>
//                 {userData?.name}
//               </div>
//             </div>
//           </Link>
//           <RiMenu3Fill onClick={toggleMenu} className='nav-menu' />
//         </div>

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





import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import byandselllogo from '../../assets/byandselllogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn, isRestaurantLoggedIn } from '../../utils';
import { clearUser } from '../../store/slices/authSlice';
import { handleSignOut } from '../../services/firebase/auth';
import { AccountCircle } from '@mui/icons-material';
import { useFetchUserData } from '../../hooks/useFetchUserData';
import { Button } from '../Buttons/Button';
import CurrencyConverter from '../common/CurrencyConverter';
import TranslateComponent from '../common/LanguageConverter';

const Navbar = ({ setShowLogin }) => {

  const { isAuthenticated } = useSelector((state) => state.auth);
  let userData = useFetchUserData()
  let isUserLoggedIn = isLoggedIn();


  const dispatch = useDispatch()


  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const logout = async () => {
    await handleSignOut()
    dispatch(clearUser());
  };

  return (
    <div className="py-4 justify-content-between align-items-center gap-4 d-flex">

      <div>
        <Link to="/">
          <img src={isMobile ? byandselllogo : logo} alt="Logo"
            className={isMobile ? 'nav-logo-mobile' : 'nav-logo-desktop'} />
        </Link>
      </div>

      <div className='d-flex  align-items-center justify-content-between gap-3 text-nowrap'>
        <div className='pointer' onClick={() => navigate("/adsListing")}>Ads Listing</div>
        {isUserLoggedIn && <div className='pointer' onClick={() => navigate("/myAds")}>My Ads</div>}
        {isUserLoggedIn && <Button onClick={() => navigate("addItem")} primary title={"+ Place An Add"}></Button>}
        <div>Blog</div>
        {!isUserLoggedIn && <div className="nav-register" onClick={() => setShowLogin(true)}>
          <AiOutlineUserAdd className="register-icon" />
          <span>Register</span>
        </div>}

        <TranslateComponent />
        <CurrencyConverter />
        {isUserLoggedIn && <Button primary onClick={logout} title={"Logout"}></Button>}
      </div>

      {/* Mobile Menu Slider */}
      {isMobileOpen && (
        <div className="mobile-menu">
          <p>Home</p>
          <p>Services</p>
          {isAuthenticated && <p onClick={() => setShowLogin(true)}>Register<AiOutlineUserAdd className="register-icon" /></p>}
          <IoMdClose onClick={toggleMenu} className="closemenu" />
        </div>

      )}
    </div>
  );
};

export default Navbar;







