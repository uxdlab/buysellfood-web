import React, { useState } from 'react'
import './Cart.css'
import { TbBasketHeart } from "react-icons/tb";
import { MdDeleteForever } from 'react-icons/md';
import { FaCircleArrowDown, FaCircleArrowRight } from 'react-icons/fa6';
import AfterPaymentPopup from '../../components/AfterPaymentPopup/AfterPaymentPopup';


const Cart = () => {

  const [isPopupVisible,setisPopupVisible] = useState(false)  

  const togglePaymentPopup = (e) =>{
      
    setisPopupVisible(!isPopupVisible);
  }

  return (
    <div className="cart">
      <div className="cart-container">
          
          <div className="cart-container-left">

            <div className="product-container">    
           
                 <div className="cart-container-left-box">
                    <div className="left-box-container">
                      <p>Pizza Delicious</p>
                      <p style={{fontSize: '14px',fontWeight:'400' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias?
                      </p>
                    </div>
                    <div className="right-box-container">
                      <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc"
                        alt="Pizza"
                      />
                    </div>
                  </div>

              <div className="btn-containers">
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
            </div>

            <div className="product-container">    
           
           <div className="cart-container-left-box">
              <div className="left-box-container">
                <p>Pizza Delicious</p>
                <p style={{fontSize: '14px',fontWeight:'400' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias?
                </p>
              </div>
              <div className="right-box-container">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc"
                  alt="Pizza"
                />
              </div>
            </div>

        <div className="btn-containers">
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
          </div>

          <div className="product-container">    
           
           <div className="cart-container-left-box">
              <div className="left-box-container">
                <p>Pizza Delicious</p>
                <p style={{fontSize: '14px',fontWeight:'400' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias?
                </p>
              </div>
              <div className="right-box-container">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc"
                  alt="Pizza"
                />
              </div>
            </div>

        <div className="btn-containers">
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
          </div>
          

        
          </div>


        

          <div className="cart-container-right">
              <div className="cart-container-right-first"><TbBasketHeart style={{fontSize:'3rem'}}/> My Basket</div>
            
              <div className="cart-container-right-second">
                  <div className="cart-container-right-second-one">
                      <p>1x</p>
                  </div>
                  <div className="cart-container-right-second-two">
                      <p className="second-two-price">$542</p>
                      <p className="second-two-name">pizza</p>
                      <p className="second-two-dishes">delicious food with cheese</p>
                  </div>
                  <div className="cart-container-right-second-third"><MdDeleteForever />
            
               </div>
              </div>
              <div className="cart-container-right-second">
                  <div className="cart-container-right-second-one">
                      <p>1x</p>
                  </div>
                  <div className="cart-container-right-second-two">
                      <p className="second-two-price">$542</p>
                      <p className="second-two-name">pizza</p>
                      <p className="second-two-dishes">delicious food with cheese</p>
                  </div>
                  <div className="cart-container-right-second-third"><MdDeleteForever />
            
               </div>
              </div>
              <div className="cart-container-right-second">
                  <div className="cart-container-right-second-one">
                      <p>1x</p>
                  </div>
                  <div className="cart-container-right-second-two">
                      <p className="second-two-price">$542</p>
                      <p className="second-two-name">pizza</p>
                      <p className="second-two-dishes">delicious food with cheese</p>
                  </div>

                  <div className="cart-container-right-second-third"><MdDeleteForever />
            
               </div>
              </div>  <div className="cart-container-right-second">
                  <div className="cart-container-right-second-one">
                      <p>1x</p>
                  </div>
                  <div className="cart-container-right-second-two">
                      <p className="second-two-price">$542</p>
                      <p className="second-two-name">pizza</p>
                      <p className="second-two-dishes">delicious food with cheese</p>
                  </div>
                  <div className="cart-container-right-second-third"><MdDeleteForever />
            
               </div>
              </div>


            {/* //price calculated details */}
              <div className="cart-price-details">
                  <div className="sub-total"><p className="sub-total-lable">Sub Total:</p><p className="sub-total-amount">$5431</p></div>
                  <div className="sub-total"><p className="sub-total-lable">Discounts:</p><p className="sub-total-amount">$5431</p></div>
                  <div className="sub-total"><p className="sub-total-lable">Delivery Fee:</p><p className="sub-total-amount">$5431</p></div>
            </div>


              <div className="total-to-pay-container">
                  <div className="total-pay-btn"><p className="total-pay-lable">Total to pay</p><p className="total-pay-amount">$514</p></div>
                  <div className="choose-your-free-item">Choose your free item:<FaCircleArrowDown style={{fontSize:'2rem',fill:'gray'}}/></div>
                  <div className="apply-coopon-code-here choose-your-free-item">Apply coopon code here<FaCircleArrowRight style={{fontSize:'2rem',fill:'green'}}/></div>
              </div>

    
           <div  onClick={togglePaymentPopup} className="make-payment"><FaCircleArrowRight style={{fontSize:'2rem',fill:'white'}}/>Make Payment</div>
            


         </div>
          
</div>
      
            { isPopupVisible && <AfterPaymentPopup onClose={togglePaymentPopup}/>}  
</div>
  )

}

export default Cart