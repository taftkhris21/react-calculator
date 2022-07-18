import React, { useState } from 'react'
import ButtonContainer from '../button-container/button-container';
import Button from '../button/button';
import Display from '../display/display';
import './calculator.css'

const buttonValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

const operators = ["/", "*", "+", "-", "."]

const Calculator = () => {
    let [calc, setCalc] = useState("")

    const handleClick = (buttonPressed) => {
        if((operators.includes(buttonPressed) && calc === "") || (calc.length > 1 && operators.includes(buttonPressed) && operators.includes(calc.slice(-1)))) {
            return
        }
        setCalc(calc + buttonPressed)
    } 

    const handleEqualClicked = () => {
        setCalc(eval(calc))
    }

    const handleClear = () => {
        setCalc("")
    }

    const handPercentClicked = () => {
        if(calc != "") {
            setCalc(calc /= Math.pow(100, 1))
        }
    }

    const handleInverseClicked = () => {
        if(calc != "") {
            setCalc(calc * -1 )
        }
    }

    return(
        <div className='calculator'>
            <Display displayValue={calc}/>
            <ButtonContainer>
                {
                    buttonValues.flat().map((button, i) => {
                    return (
                        <Button
                            key={i}
                            className={button === "=" ? "equals" : "button"}
                            value={button}
                            onClick={() => button === "=" 
                                        ? handleEqualClicked() 
                                        : button === "C" 
                                        ? handleClear()
                                        : button === "%"
                                        ? handPercentClicked()
                                        : button === "+-"
                                        ? handleInverseClicked()
                                        :handleClick(button)}
                        />
                        );
                    })
                }
            </ButtonContainer>
        </div>
    )
}

export default Calculator