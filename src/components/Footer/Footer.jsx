import { assets } from "../../assets/assets";
import "./Footer.css";

import byandselllogo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" className="" />
          <p>
            Our job is to filling your tummy with delicious food and with fast
            and free delivery.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-right">
          <h5>ABOUT US</h5>
          <ul style={{ paddingLeft: "0px" }}>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h5>COMPANY</h5>
          <ul style={{ paddingLeft: "0px" }}>
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-content-center">
          <h5>GET IN TOUCH</h5>
          <ul style={{ paddingLeft: "0px" }}>
            <li>+91 9876543210</li>
            <li>contact@buyandsellfood.app</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-between w-100">

        <div>
          <img src={byandselllogo} alt="Logo"
            className={'nav-logo-desktop'} />
        </div>

        <div className="footer-copyright d-flex gap-5">
          Copyright 2024 &copy; powered by buyandsellfood.app. Inc. All Right Reserved
        </div>
      </div>

    </div>
  );
};

export default Footer;
