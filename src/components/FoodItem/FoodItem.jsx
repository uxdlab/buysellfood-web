import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  const quantity = cartItems && cartItems[id] ? cartItems[id] : 0;

  return (
    <Link to="/restaurantlist" style={{textDecoration:"none",color:'black'}}> <div className="food-item">
      <div className="food-item-img-container">
        {/* <img className="food-item-image" src={`${url}/images/${image}`} alt="" />
                 {!quantity ? (
                    <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
                        <p>{quantity}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add to Cart" />
                    </div>
                )}  */}
        <img className="food-item-image" src={image} alt="" />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* Add your rating component here */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div></Link>
  );
};

export default FoodItem;
