import React, { useState } from 'react'
import ButtonContainer from '../button-container/button-container';
import Button from '../button/button';
import Display from '../display/display';
import './calculator.css'

const buttonValues: string[][] = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

const operators: string[] = ["/", "*", "+", "-", "."]

const Calculator = () => {
    let [calc, setCalc] = useState<string>("")

    const handleClick = (buttonPressed: string) => {
        if((operators.includes(buttonPressed) && calc === "") || (calc.length > 1 && operators.includes(buttonPressed) && operators.includes(calc.slice(-1)))) {
            return
        }
        setCalc(calc + buttonPressed)
    } 

    const handleEqualClicked = (): void => {
        setCalc(eval(calc).toString())
    }

    const handleClear = (): void => {
        setCalc("")
    }

    const handPercentClicked = (): void => {
        if(calc !== "") {
            let value: number = parseInt(calc)
            setCalc((value /= Math.pow(100, 1)).toString())
        }
    }

    const handleInverseClicked = (): void => {
        if(calc !== "") {
            let value: number = parseInt(calc)
            setCalc((value * -1).toString())
        }
    }

    return(
        <div className='calculator'>
            <Display displayValue={calc.length > 0 ? calc : "0"}/>
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