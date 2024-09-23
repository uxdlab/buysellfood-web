import React, { useState } from 'react'
import ListCard from './ListCard';
import { assets } from '../../assets/assets';
import './RestaurantListing.css'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ClientReviews from '../ClientReviews/ClientReviews';

const RestaurantListing = () => {


  const staticFoodList = [
    {
      _id: "1",
      name: "Pizza Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 12.99,
      image: assets.img1,
      category: "Pizza",
    },
    {
      _id: "2",
      name: "Spaghetti Bolognese",
      description: "Traditional Italian pasta with meat sauce",
      price: 10.99,
      image: assets.img2,
      category: "Rolls",
    },
    {
      _id: "3",
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing",
      price: 8.99,
      image: assets.img1,
      category: "Salad",
    },
    {
      _id: "4",
      name: "Cheeseburger",
      description: "Juicy grilled beef patty with cheese, lettuce, and tomato",
      price: 9.99,
      image: assets.img2,
      category: "Deserts",
    },
    {
      _id: "5",
      name: "Sushi Platter",
      description: "Assorted sushi rolls with fresh fish and vegetables",
      price: 18.99,
      image: assets.img1,
      category: "Sushi",
    },
    {
      _id: "6",
      name: "Veg",
      description: "Assorted  with fresh vegetables",
      price: 18.99,
      image: assets.img1,
      category: "Pure Veg",
    },
    {
      _id: "7",
      name: "Cake",
      description: "Delicious Cakes",
      price: 18.99,
      image: assets.img1,
      category: "Cake",
    },
    {
      _id: "7",
      name: "Pasta",
      description: "Alfredo Pasta",
      price: 18.99,
      image: assets.img1,
      category: "Pasta",
    },
  ];

  return (
    <div className="restaurant-container">

        <p className='restaurant-heading'>Home/Mumbai/India/ <span>Pizza Restaurant</span></p>

        <div className="heading-container">
            <h2>Pizza Delivery in India</h2>
            <p>A classic Margherita pizza with a crispy crust, topped with rich tomato sauce, creamy mozzarella, fresh basil, and a drizzle of extra virgin olive oil.</p>
        </div>

        {/* <div className="heading-btn">
            <button>filter</button>
            <button>pizza</button>
            <button>sort by</button>
        </div> */}
        

        <div className="card-containerlist">
        {staticFoodList.map(foodItem => (
          <ListCard
            key={foodItem._id}
            name={foodItem.name}
            description={foodItem.description}
            price={foodItem.price}
            image={foodItem.image}
          />
          ))}
        </div>

            <ClientReviews/>

    </div>
  )
}

export default RestaurantListing
