import React from 'react'
import './AfterPaymentPopup.css'
import chef from '../../assets/chef.png'
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/logo.png'

const AfterPaymentPopup = ({onClose}) => {
  return (
    <div className="after-payment-popup">
        <div className="payment-popup">
                <div className="payment-popup-left">
                    <div className="website-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="chef-img">
                        <img src={chef} alt="" />
                    </div>
                </div>

                <div className="payment-popup-right">
                        <p style={{color:'#13B251',fontSize:'1.5vw',fontWeight:'bold'}}>Thank you for your order</p>
                        <div className="orderid"><span>order#123456343</span><span>date: 15.09.2024</span></div>
                        <hr />
                        <div className="payment-popup-right-second-column">
                            <div className="second-column-first"><p>1</p></div>
                            <p style={{flex:'1',marginTop:'10px',marginLeft:'15px'}}>Margherita pizza</p>
                            <p style={{marginTop:'10px'}}>$7</p>
                        </div>
                        <div className="payment-popup-right-second-column">
                            <div className="second-column-first"><p>2</p></div>
                            <p style={{flex:'1',marginTop:'10px',marginLeft:'15px'}}>Margherita pizza</p>
                            <p style={{marginTop:'10px'}}>$7</p>
                        </div>
                        <hr />

                        <div className="payment-popup-right-third">
                            <p className="third-payment-lable">Order fee</p>
                            <p className="third-payment-price">$52</p>
                        </div>
                        <div className="payment-popup-right-third">
                            <p className="third-payment-lable">Discount</p>
                            <p className="third-payment-price">$52</p>
                        </div>
                        <hr />
                        
                        <div className="payment-popup-right-forth">
                            <p className="forth-payment-total-lable">Total Amount</p>
                            <p className="forth-payment-total-price">$16</p>
                        </div>

                        <IoMdClose onClick={onClose} style={{position:'absolute',fontSize:'2rem',top:'0px',right:'0px',cursor:'pointer'}}/>
                </div>
        </div>

    </div>
  )
}

export default AfterPaymentPopup