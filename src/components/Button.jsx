import React from "react";
import { Const } from "three/tsl";

const Button = ({text , className , id}) => {
  return (
    <a 
    onClick={() =>{
      e.preventDefault();
      const target = document.getElementById('count')

    }}
    className={`${className ?? ''} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>

        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </a>
  );
};

export default Button;
