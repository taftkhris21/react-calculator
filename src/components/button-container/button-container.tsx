import React from 'react'
import "./button-container.css";

interface ButtonContainerProps {
  children: any
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({children}: ButtonContainerProps) => {
  return (
    <div className="button-container">{children}</div>
  ) 
}

export default ButtonContainer