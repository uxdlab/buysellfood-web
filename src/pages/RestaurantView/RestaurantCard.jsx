import React, { useState } from 'react'
import './RestaurantCard.css'
import { BsPlusCircleFill } from "react-icons/bs";


const RestaurantCard = ({ name, price, image,openPopup }) => {

  return (

        <div className="card-div">
            <div className="card-details">
                <div className="info">
                <p className='first'>{name}</p>
                <p className='second'>North Indian, Biryani,</p>
                </div>
                <div style={{fontSize:'600',fontWeight:'bold'}} >{price}</div>
            </div>
            <div className='card-details-img'>
              <img src={image}alt="food image" />
              <div className='add-btn'>
                <BsPlusCircleFill  onClick={openPopup}/>
              </div>
            </div>

        </div>
   
  )
}

export default RestaurantCard
