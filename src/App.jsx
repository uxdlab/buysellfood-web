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

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  // addRestaurant
  return (
    <>  
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <div className="app">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/restaurantview" element={<RestaurantView/>} />
          <Route path="/restaurantlist" element={<RestaurantListing/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App