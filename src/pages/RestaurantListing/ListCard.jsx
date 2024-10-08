// Card.js
import React from 'react';
import "./ListCard.css"
import star from '../../assets/star.png';
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';


const ListCard = ({ name, description, price, image }) => (

   <Link to="/restaurantview" style={{textDecoration:'none'}}><div className="card" style={{border:'none',}} >
    <img src={image} alt={name} className="card-image" />
    <div className="card-content">
      <div className="card-content-one">
        <p>{name}</p>
        <div>4.4 <img src={star} alt="star" /></div>
      </div>
        <div className='card-content-two'>
          <p>North Indian, Biryani,</p>
          <div><IoMdTime /><span>32 Mins</span> </div>
        </div>
     
    </div>
  </div></Link>
);

export default ListCard;
