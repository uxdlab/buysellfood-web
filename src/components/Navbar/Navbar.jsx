import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import byandselllogo from '../../assets/byandselllogo.png';

const Navbar = ({ setShowLogin }) => {

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

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <img src={isMobile ? byandselllogo : logo} alt="Logo"
             className={isMobile ? 'nav-logo-mobile' : 'nav-logo-desktop'} />
          </Link>
          <div className="nav-location">
            <span className="location-name">Dublin</span>
            <span className="location-address">Daniel Street  1081/11</span>
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Our Services</Link>
          <Link to="/addRestaurant" className="nav-link">Add restaurant</Link>
          <div className="nav-register" onClick={() => setShowLogin(true)}>
            <AiOutlineUserAdd className="register-icon" />
            <span>Register</span>
          </div>
        </div>

        <div className="navbar-right">
          <div onClick={() => navigate('/cart')} className="nav-icon">
            <FiShoppingBag />
          </div>
          <RiMenu3Fill onClick={toggleMenu} className='nav-menu' />
        </div>
      </div>
      
      {/* Mobile Menu Slider */}
      {isMobileOpen && (
        <div className="mobile-menu">
          <p>Home</p>
          <p>Services</p>
        
          <p onClick={() => setShowLogin(true)}>Register<AiOutlineUserAdd className="register-icon" /></p>
        
          <IoMdClose onClick={toggleMenu} className="closemenu"/>
        </div>

      )}
    </div>
  );
};

export default Navbar;
