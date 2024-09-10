import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  // State's
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken, selectedItem } =
    useContext(StoreContext);

  console.log("selt", selectedItem);

  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/");
  };

  const navigateToOrder = () => {
    navigate("/myorders");
  };

  return (
    <div className="navbar p-3">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" width="50px" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        {/* <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a> */}
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon ">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />

            {selectedItem.length === 0 ? (
              ""
            ) : (
              <div>
                <p style={{ fontSize: "1.5rem", color: "white" }}>
                  {selectedItem.length}
                </p>
              </div>
            )}
          </Link>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={navigateToOrder}>
                <img src={assets.bag_icon} alt="" /> <p>Orders</p>{" "}
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" /> <p>Logout</p>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
