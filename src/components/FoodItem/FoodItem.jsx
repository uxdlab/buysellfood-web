import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import Vector from '../../assets/Vector.png';
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  const quantity = cartItems && cartItems[id] ? cartItems[id] : 0;

  return (
    // 
    <div className="food-item" style={{ border: 'none', }} >
      <img src={image} alt={name} className="food-item-image" />
      <div className="food-item-details">
        <div className="food-item-name-rating">
          <p className="name">{name}</p>
          {/* <div className="star"> <img style={{width:'12px'}}  src={Vector} alt="star" />4.4</div> */}
        </div>
        <div className='food-item-add-price'>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <button>Add To Cart</button>
          </Link>
          <p>${price}</p>
        </div>

      </div>
    </div>

  );
};

export default FoodItem;
