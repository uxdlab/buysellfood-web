import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import Verify from "./pages/Verify/Verify"
import MyOrders from "./pages/MyOrders/MyOrders"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RestaurantView from "./pages/RestaurantView/RestaurantView"
import RestaurantListing from "./pages/RestaurantListing/RestaurantListing"
import { AddItem } from "./pages/Items/AddItem"
import { Profile } from "./pages/Profile/Profile"
import { AdsListing } from "./pages/AdsListing/AdsListing"
import { MyAds } from "./pages/MyAds/MyAds"
import { FORM_TYPES } from "./utils/constants"
import { Paypal } from "./pages/Paypal/Paypal"

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [formType, setFormType] = useState(FORM_TYPES.login);
  // addRestaurant
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} setFormType={setFormType} formType={formType} /> : <> </>}
      <div className="app">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} setFormType={setFormType} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          {/* <Route path="/myorders" element={<MyOrders />} /> */}
          <Route path="/restaurantview" element={<RestaurantView />} />
          <Route path="/Restaurants" element={<RestaurantListing />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adsListing" element={<AdsListing />} />
          <Route path="/myAds" element={<MyAds />} />
          <Route path="/pay-pal" element={<Paypal />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App