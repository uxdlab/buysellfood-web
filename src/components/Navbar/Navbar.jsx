import React from 'react'
import './Navbar.css'
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import logo from '../../assets/logo.png'
import { Link,  useNavigate } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

  const navigate = useNavigate();

  return (
    <div className="main-navigation">
        <div className="main-navigation-container">

          <div className="first-nav-items">
             <Link to={'/'}><div className="nav-logo">
              <img src={logo} alt="" />
            </div></Link>
            <div className="nav-address">
              <span style={{color:'black',fontWeight:'600',textDecorationLine:'underline'}}>Dublin</span>
              <span style={{color:'gray',marginLeft:'10px',fontSize:'small'}}> Daniel Street 1081/11</span>
            </div>
            </div>

          <div className="second-nav-items">
            <div className="navigation-nav">
              <p>Home</p>
              <p>Our Services</p>
              <div onClick={() => setShowLogin(true)} className='register'>
                <AiOutlineUserAdd style={{fontSize:'1.5rem',color:'#35497E',marginTop:'-15px'}}/>
                <p>Register</p>
              </div>
            </div>
            <div className="nav-search-container">
                <div className="search-box">
                  <IoSearchOutline  style={{fontSize:'2rem'}} />
                  <input type="text" placeholder='Search' />
                </div>
                 <div onClick={() => navigate('/cart')} className="bag">
                    <FiShoppingBag   style={{fontSize:'2rem'}} />
                </div>
            </div>
            </div>



      </div>
    </div>
  )
}

export default Navbar





















// import "./Navbar.css";
// import { assets } from "../../assets/assets.js";
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext.jsx";

// const Navbar = ({ setShowLogin }) => {
//   // State's
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken, selectedItem } =
//     useContext(StoreContext);

//   console.log("selt", selectedItem);

//   const navigate = useNavigate();

//   const logout = () => {
//     setToken("");
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const navigateToOrder = () => {
//     navigate("/myorders");
//   };

//   return (
//     <div className="navbar py-3">
//       <Link to={"/"}>
//         <img src={assets.logo} alt="" className="logo" width="50px" />
//       </Link>
//       <ul className="navbar-menu">
//         <Link
//           to={"/"}
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           Menu
//         </a>
//         {/* <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a> */}
//         <a
//           href="#footer"
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           Contact us
//         </a>
//       </ul>

//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />

//         <Link to={"/cart"} style={{cursor:'pointer'}}>
//         <div className="navbar-search-icon"> 
//             <img src={assets.basket_icon} className="basket-image"  alt="" />
//             {selectedItem.length === 0 ? ("") : (
//               <div className="cart-number-wrapper">
//               <div id="cart-number">
//                 <p style={{ fontSize: "1.5rem", color: "white" }}>
//                   {selectedItem.length}
//                 </p>
//               </div>
//               <div className="cart-empty-div">
//                 <div>
//                     <img style={{width:'100px',height:'100px',borderRadius:'10px'}} src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh' alt="image" />
//                     <div className="first">
//                       <p>Satkar Restaurant</p>
//                       <p>Satkar Chowk</p>
//                       <p style={{color:'green'}}>View Full Menu</p>
//                     </div>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>food Name</p>
//                   <p>$50</p>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>subTotoal</p>
//                   <p>$50</p>
//                 </div>
//                 <button onClick={()=> navigate('/cart')} style={{width:'100%',backgroundColor:'green',color:'white'}}>CheckOut</button>
//             </div>
//               </div>
//             )}

            

//         </div></Link>



//         {!token ? (
//           <button onClick={() => setShowLogin(true)}>sign in</button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_icon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li onClick={navigateToOrder}>
//                 <img src={assets.bag_icon} alt="" /> <p>Orders</p>{" "}
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="" /> <p>Logout</p>{" "}
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
