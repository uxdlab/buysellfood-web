import React from "react";
import "./Stepper.css";
import { assets } from "../../assets/assets";

const Stepper = () => {
  return (
    <div className="stepper-display" id="stepper-display">
      <h2>How We Process</h2>
      <div className="container text-center mt-5">
        <div className="image-container">
          <img src={assets.stepper} />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
