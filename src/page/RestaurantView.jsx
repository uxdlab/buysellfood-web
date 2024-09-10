import React, { useState, useContext } from "react";
import "./RestaurantView.css"; // Ensure this path is correct
import { BsArrowLeftShort } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import { offerUrl } from "../constant";
import { StoreContext } from "../context/StoreContext";
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS import
import { assets } from "../assets/assets";

const RestaurantView = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const { addItem } = useContext(StoreContext);

  // Sample restaurant data with additional details
  const restaurantData = [
    {
      id: 1,
      largeImage: assets.img1,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
      description: "Delicious food from around the world.",
      priceRange: "₹300-₹600"
    },
    {
      id: 2,
      largeImage: assets.img2,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
      description: "Tasty and fresh ingredients.",
      priceRange: "₹250-₹550"
    },
    {
      id: 3,
      largeImage: assets.img1,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "inactive",
      description: "A variety of international dishes.",
      priceRange: "₹400-₹700"
    },
    {
      id: 4,
      largeImage: assets.img2,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
      description: "Authentic flavors and recipes.",
      priceRange: "₹350-₹650"
    },
    {
      id: 5,
      largeImage: assets.img1,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
      description: "Experience global cuisine.",
      priceRange: "₹300-₹600"
    },
  ];

  const addHandler = (item) => {
    addItem(item);
    console.log("item", item);
  };

  const handleShowPopup = (item) => {
    setCurrentItem(item);
    setShowPopup(true);
  };

  return (
    <div className="restaurant-container">
      <h2 className="restaurant-name">Urban Cafe</h2>
      <div className="restaurant-content">
        <p className="rating-info">
          ✨3.4 (2 ratings)<span> • ₹300 for two</span>
        </p>
        <p className="food-type" style={{ color: "green" }}>
          Snacks, Pizzas
        </p>
        <p className="location-info">
          Outlet <span>Chhindwara City</span>
        </p>
        <p className="delivery-time">55-60 mins</p>
      </div>

      <div className="dealsforyou">
        <div className="btn-container">
          <p>Deals for you</p>
          <div className="btn-group">
            <button type="button" className="btn btn-outline-dark">
              <BsArrowLeftShort style={{ fontSize: '2rem' }} />
            </button>
            <button type="button" className="btn btn-outline-dark">
              <TiArrowRight style={{ fontSize: '2rem' }} />
            </button>
          </div>
        </div>

        <div className="offer-container">
          {Array(3).fill(null).map((_, index) => (
            <div key={index} className="offer-one">
              <img src={offerUrl} width={'40px'} height={'40px'} alt="offeroneimg" />
              <div className="offer-para">
                <p>Extra ₹15 Off</p>
                <p style={{ fontSize: '10px', color: 'gray' }}>APPLICABLE OVER & ABOVE...</p>
              </div>
            </div>
          ))}
        </div>

        <h4 style={{ color: 'gray' }}>Restaurant Menu</h4>
        <div className="accordion" id="accordionExample">
          {restaurantData.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {item.name}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion-body-content" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    
                    <div className="accordion-text">
                      <p><strong>{item.name}</strong></p>
                      <p>Rating: {item.rating}</p>
                      <p>Description: {item.description}</p>
                      <p>Price Range: {item.priceRange}</p>
                    </div>
                    <div className="accordion-image-container " style={{display:'flex',justifyContent:'end',alignItems:'center',position:'relative'}}>
                      <img src={item.largeImage} alt={item.name} style={{width:"100px",height:'100px',borderRadius:'20px'}} className="accordion-image" />
                      <button className="add-btn" style={{position:'absolute',bottom:'0px',right:'10px'}} onClick={() => addHandler(item)}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantView;
