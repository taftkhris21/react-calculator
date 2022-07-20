import React from 'react'
import './display.css'

type DisplayProps = {
    displayValue: string
}

const Display: React.FC<DisplayProps> = ({ displayValue }: DisplayProps) => {
    return <div className='display'>{displayValue}</div>
}

export default Display