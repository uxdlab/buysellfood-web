import React from 'react'
import './RestaurantCard.css'
import { BsPlusCircleFill } from "react-icons/bs";


const RestaurantCard = ({ name, description, price, image }) => {
  return (

        <div className="card-div">
            <div className="card-details">
                <p className='first'>{name}</p>
                <p className='second'>North Indian, Biryani,</p>
                <div style={{fontWeight:'bold'}}>{price}</div>
            </div>
            <div style={{width:'150px',height:'150px',position:'relative'}}>
              <img src={image} style={{width:'100%',height:"100%",borderRadius:'20px'}} alt="" />
              <div className='add-btn'>
                <BsPlusCircleFill/>
              </div>
            </div>

        </div>
   
  )
}

export default RestaurantCard
