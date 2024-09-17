import React, { useState } from 'react';
import './AddFoodPopup.css';
import { IoHeartCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import redcircle from '../../assets/redcircle.png'
import greencircle from '../../assets/greencircle.png'

const AddFoodPopup = ({closePopup}) => {

  const [isVisibleCustomizeItem,setisVisibleCustomizeItem] = useState(false)

  const [isVisibleAddNote,setisVisibleAddNote] = useState(false)
  const [isVisibleCancel,setisVisibleCancel] = useState(true)
  const [isVisibleNote,setisVisibleNote] =useState(false);
  const [isVisibleBtnContainer,setisVisibleBtnContainer] = useState(true)

  const toggleAddbtn = () =>{
    setisVisibleAddNote(!isVisibleAddNote)
    setisVisibleCancel(!isVisibleCancel)
    setisVisibleBtnContainer(!isVisibleBtnContainer)
  }

  const addnoteHandler = () =>{
    setisVisibleNote(!isVisibleNote)
    setisVisibleAddNote(!isVisibleAddNote)
    setisVisibleBtnContainer(!isVisibleBtnContainer)
  }

  return (
    <div className="add-food-popup">
      <div className="food-popup">

        <div className="firstbox">
          <div className="left">
            <p>Pizza Delicious</p>
            <p style={{ color: 'gray',fontSize:'14px',fontWeight:'400 ' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias? </p>
                
                    
          </div>

          <div className="right">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc"
              alt="Pizza"
            />
          </div>
        </div>

        <div className="addnote-container">
              {
                isVisibleNote && 
                  <div className='edit-container add-note-edit-btn'>
                      <div><button onClick={addnoteHandler}>edit</button></div>
                      <div className='para'>this is Lorem ipsum dolor, fsfasfsadfassit </div>
                </div>                 
              }


                { isVisibleAddNote &&
                 <div className="write-note">
                  <textarea placeholder='write note'>  </textarea> <div>
                    <div className="addnote-btn-container add-note-edit-btn">
                  <button onClick={addnoteHandler}>Add Note</button>
                  <button onClick={toggleAddbtn}>cancel</button>
                  </div>
                </div>
                </div>
                 }

              <div className="add-note-edit-btn">
                  {isVisibleCancel && <button onClick={toggleAddbtn}>Add Note</button>}
              </div>
     

        </div>

             
                  
  
      

                  {isVisibleBtnContainer &&
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
     
        </div> }

        <div className="secondbox">
          <h2>Customize as per your taste</h2>
          <hr />

            <div className="lable-container">
                <p>Say Cheese!</p>
            <div className='lable-box'>
                <div className="lable">
                    <label htmlFor="vehicle1"> <img src={greencircle} alt=""  style={{marginRight:'10px'}}/>Double Cheese Slice</label>
                    <p>+$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1" > <img src={greencircle} alt=""  style={{marginRight:'10px'}}/>Truple Cheese Slice</label>
                    <p>+$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1"> <img src={greencircle} alt=""  style={{marginRight:'10px'}}/>Loaded Cheese Slice</label>
                    <p>+$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
            </div>   

            <p>Extra Chicken Piece!</p>
            <div className='lable-box'>
                <div className="lable">
                    <label htmlFor="vehicle1">
                      <img src={redcircle} alt=""  style={{marginRight:'10px'}}/>Double Cheese Slice</label>
                    <p>+$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1"> <img src={redcircle} alt=""  style={{marginRight:'10px'}}/>Truple Cheese Slice</label>
                    <p>+$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
                <div className="lable">
                    <label htmlFor="vehicle1"> <img src={redcircle} alt=""  style={{marginRight:'10px'}}/>Loaded Cheese Slice</label>
                    <p>+$515<input type="checkbox" id="vehicle1" name="vehicle" value="Bike" /></p>
                </div>
            </div>                

            </div>

          

        
        </div>

        <div className="thirdbox">
        { isVisibleCustomizeItem &&
                   <div className="customize-items">
                    <p>first item,</p>
                    <p>second item</p>
                  </div>
                  
}
            <div className="customize-container">
                  

                <div className="customize-left">
                    <p className='one'>$513</p>
                    <p onClick={() => setisVisibleCustomizeItem(!isVisibleCustomizeItem)} className='two'>View Customize Items</p>
                </div>
                <div className="customize-right">
                    <button id='close' onClick={closePopup}>Close</button>
                    <Link to="/cart"><button>Add item to Cart</button></Link>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );

};

export default AddFoodPopup;
