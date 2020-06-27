import React, {useState} from 'react';
import { TimerState } from "../App";
import { inputToMs } from "../Utils";
import "./TimerInput.css"

interface ITimerInputProps {
    msecTarget: number,
    setMsecTarget: (seconds: number) => void,
    setTimerState: (timerState: TimerState) => void
}

function TimerInput(props: ITimerInputProps) {
    const [input, setInput] = useState("");

    const submitInput = () => {
        props.setMsecTarget(inputToMs(input))
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
            const base = input.length < 6 ? input : input.substring(1)
            setInput(base + e.key)
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
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

export { TimerInput }