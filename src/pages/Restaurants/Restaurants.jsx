import React from "react";
import "./Restaurants.css";
import { assets } from "../../assets/assets";

export const Restaurants = () => {
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

  return (
    <div className="rest-display" id="rest-display">
      <h2>Most Popular Restaurants</h2>
      <div className="row">
        {restaurantData.map((restaurant) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 mt-3"
            key={restaurant.id}
          >
            <div className=" restaurant-card">
              <img
                src={restaurant.largeImage}
                className="card-img-top"
                alt={restaurant.name}
                style={{ borderRadius: "10px" }}
              />
              <div className="card-body mt-2">
                <div className="row align-items-center">
                  <div className="col-3">
                    <img
                      src={restaurant.smallImage}
                      alt="Small"
                      className="img-fluid small-image"
                    />
                  </div>
                  <div className="col-9">
                    <h5 className="restaurant-name mb-1">{restaurant.name}</h5>
                    <span className="restaurant-rating">
                      {restaurant.rating} ★
                    </span>
                  </div>
                </div>
                <button className="btn btn-success mt-3">
                  {restaurant.status === "active"
                    ? "Opens tommorow"
                    : "Open now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
