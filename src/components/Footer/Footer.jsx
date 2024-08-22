import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" className=""  />
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
          <h3>ABOUT US</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>COMPANY</h3>
          <ul>
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-content-center">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>+91 9876543210</li>
            <li>contact@Buy&Sell.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Buy&Sell.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
