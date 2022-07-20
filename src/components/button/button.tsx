import React from 'react'
import './button.css'

type ButtonProps = {
    className: string,
    value: string,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({className, value, onClick}: ButtonProps) => {
    return <button className={className} onClick={onClick}>{value}</button>
}

export default Button