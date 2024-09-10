import React, { useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    '1': 2,
    '2': 1,
  });

  const [food_list] = useState([
    { id: '1', name: 'Burger', price: 500, imageId: 'burger_image' },
    { id: '2', name: 'Pizza', price: 800, imageId: 'pizza_image' },
  ]);

  const [selectedItem] = useState([
    { card: { info: food_list[0] }, price: 500, _id: '1' },
    { card: { info: food_list[1] }, price: 800, _id: '2' },
  ]);

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = selectedItem.find(item => item._id === itemId);
      return total + (item.price * cartItems[itemId]);
    }, 0);
  };

  const removeItem = (item) => {
    setCartItems(prevItems => {
      const newItems = { ...prevItems };
      delete newItems[item._id];
      return newItems;
    });
  };

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {selectedItem.map((item, index) => (
          <div key={index}>
            <div className="cart-items-row cart-items-item">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                alt="item"
              />
              <p>{item.card.info.name}</p>
              <p>₹{Math.floor(item.card.info.price / 100)}</p>
              <p>{cartItems[item._id]}</p>
              <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
              <p
                onClick={() => removeItem(item)}
                className="cross remove-button"
              >
                x
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{selectedItem.reduce((total, item) => total + cartItems[item._id], 0)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button
            onClick={() => navigate('/order')}
            style={{ background: 'green' }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

















// import { useContext } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
//     useContext(StoreContext);

//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Image</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index}>
//                 <div className="cart-items-row cart-items-item">
//                   <img src={url + "/images/" + item.image} alt={item.name} />
//                   <p>{item.name}</p>
//                   <p>${item.price.toFixed(2)}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
//                   <p
//                     onClick={() => removeFromCart(item._id)}
//                     className="cross remove-button"
//                   >
//                     x
//                   </p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Total</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>
//                 ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
//               </b>
//             </div>
//             <hr />
//           </div>
//           <button
//             onClick={() => navigate("/order")}
//             style={{ background: "green" }}
//           >
//             PROCEED TO CHECKOUT
//           </button>
//         </div>
//         <div className="cart-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cart-promocode-input">
//             <input type="text" placeholder="promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
