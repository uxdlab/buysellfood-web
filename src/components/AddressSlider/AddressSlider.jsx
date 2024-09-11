import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import './AddressSlider.css'; // Make sure the CSS file is correctly imported

const AddressSlider = ({ isVisible, onClose }) => {
  return (
    <div className={`slider ${isVisible ? 'slide-right' : 'slide-left'}`}>
      
      <div className="slider-container">
        <div className="slider-header">
        <h2>Save delivery address</h2>
        <AiOutlineCloseCircle className='icon' onClick={onClose} />
      </div>

      <div className="map">
        <img src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api_480.png" alt="Map" />
      </div>

      <div className="address">
        <div>
          <label>Door / Flat no. can not be empty</label>
          <input type="text" placeholder='Door / Flat no. can not be empty' />
        </div>
        <div>
          <label>Area can not be empty</label>
          <input type="text" placeholder='Area can not be empty' />
        </div>
        <div>
          <label>Landmark</label>
          <input type="text" placeholder='Landmark' />
        </div>
        <div className='address-home'>
          <div>Home</div>
          <div>Work</div>
          <div>Others</div>
        </div>

        <button>SAVE ADDRESS & PROCEED</button>
      </div>

      </div>
    </div>
  );
}

export default AddressSlider;
