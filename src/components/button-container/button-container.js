import React from 'react'
import "./button-container.css";


const ButtonContainer = ({children}) => {
  return (
    <div className="button-container">{children}</div>
  ) 
};

export default ButtonContainer