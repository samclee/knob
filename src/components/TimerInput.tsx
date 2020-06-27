import React, {useState} from 'react';
import { TimerState } from "../App"
import "./TimerInput.css"

interface ITimerInputProps {
    msecTarget: number,
    setMsecTarget: (seconds: number) => void,
    setTimerState: (timerState: TimerState) => void
}

function TimerInput(props: ITimerInputProps) {
    const [input, setInput] = useState("");

    const submitInput = () => {
        const parsedInput = input.length > 0 ? parseInt(input) : 0
        props.setMsecTarget(parsedInput)
    }

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        props.setTimerState(TimerState.Stopped);
        setInput("")
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        submitInput()
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            submitInput()
        } else if (Number.isInteger(parseInt(e.key))) {
            setInput(input + e.key)
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            console.log("hi")
            setInput(input.substring(0, input.length-1))
        } 
    }

    return (
        <input
            className="TimerDisplay"
            type="text"
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onChange={()=>{}}
            value={input}
        />
    )
}

export default TimerInput