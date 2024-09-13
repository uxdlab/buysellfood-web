import React from 'react';
import './AddFoodPopup.css';
import { IoHeartCircleOutline } from "react-icons/io5";


const AddFoodPopup = ({closePopup}) => {
  return (
    <div className="add-food-popup">
      <div className="food-popup">


        <div className="firstbox">
          <div className="left">
            <p>Pizza Delicious</p>
            <p style={{ color: 'gray', fontSize: 'small' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias?
            </p>
            <button>Add Note</button>
          </div>
          <div className="right">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc"
              alt="Pizza"
            />
          </div>
        </div>
        <div className="btn-container">
            <div className='buttons' style={{backgroundColor:'black'}}>
              <button style={{backgroundColor:'black',color:'white'}}>Small</button>
              <button>$513</button>
            </div>
            <div className='buttons'>
              <button style={{backgroundColor:'white'}}>Small</button>
              <button className='button-price'>$513</button>
            </div>
            <div className='buttons'>
              <button style={{backgroundColor:'white'}}>Small</button>
              <button className='button-price'>$513</button>
            </div>
            <div className='buttons'>
              <button style={{backgroundColor:'white'}}>Small</button>
              <button className='button-price'>$513</button>
            </div>
     
        </div>

        <div className="secondbox">
          <h2>Customize as per your taste</h2>
          <hr />

            <div className="lable-container">
                <p>Say Cheese!</p>
            <div className='lable-box'>
                <div className="lable">
                    <label htmlFor="vehicle1" style={{color:'black'}}><IoHeartCircleOutline style={{marginRight:'5px'}}/>Double Cheese Slice</label>
                    <p>$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1" style={{color:'black'}}><IoHeartCircleOutline style={{marginRight:'5px'}}/>Truple Cheese Slice</label>
                    <p>$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1" style={{color:'black'}}><IoHeartCircleOutline style={{marginRight:'5px'}}/>Loaded Cheese Slice</label>
                    <p>$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
            </div>   

            <p>Extra Chicken Piece!</p>
            <div className='lable-box'>
                <div className="lable">
                    <label htmlFor="vehicle1" style={{color:'black'}}><IoHeartCircleOutline style={{marginRight:'5px'}}/>Double Cheese Slice</label>
                    <p>$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1" style={{color:'black'}}><IoHeartCircleOutline style={{marginRight:'5px'}}/>Truple Cheese Slice</label>
                    <p>$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1" style={{color:'black'}}><IoHeartCircleOutline style={{marginRight:'5px'}}/>Loaded Cheese Slice</label>
                    <p>$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
            </div>                

            </div>

          

        
        </div>

        <div className="thirdbox">
            <div className="customize-container">
                <div className="customize-left">
                    <p>$513</p>
                    <p style={{color:'#13B251'}}>View Customize Items</p>
                </div>
                <div className="customize-right">
                    <button onClick={closePopup} style={{marginRight:'10px'}}>Close</button>
                    <button>Add item to Cart</button>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default AddFoodPopup;
