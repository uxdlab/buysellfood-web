import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import './ButtonWithArrows.css'

const ButtonWithArrows = () => {
  return (
    <div className="button-container">
      <div className="button">
        <MdKeyboardArrowLeft style={{fontSize:'2rem'}}/>
      </div>
      <div className="button">
        <MdKeyboardArrowRight style={{fontSize:'2rem'}} />
      </div>
    </div>
  );
};

export default ButtonWithArrows;
