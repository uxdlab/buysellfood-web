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

  // Sample restaurant data
  const restaurantData = [
    {
      id: 1,
      largeImage: assets.img1,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
    },
    {
      id: 2,
      largeImage: assets.img2,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
    },
    {
      id: 3,
      largeImage: assets.img1,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "inactive",
    },
    {
      id: 4,
      largeImage: assets.img2,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
    },
    {
      id: 5,
      largeImage: assets.img1,
      smallImage: assets.img3,
      name: "Foodworld",
      rating: "4.5",
      status: "active",
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
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {item.name} (Rating: {item.rating})
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{item.name}</strong> - Rating: {item.rating}
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
