import React, {useState} from 'react';
import { TimerState } from "../App";
import { inputToMs, inputToString, msToString } from "../Utils";
import "./TimerInput.css"

export interface ITimerInputProps {
    timerState: TimerState,
    setTimerState: (timerState: TimerState) => void,

    msecTarget: number,
    setMsecTarget: (seconds: number) => void,

    curMseconds: number,
    setCurMseconds: (seconds: number) => void
}

function TimerInput(props: ITimerInputProps) {
    const [input, setInput] = useState("")

    const submitInput = () => {
        const mseconds = inputToMs(input)
        props.setMsecTarget(mseconds)
        props.setCurMseconds(mseconds)
    }

    const onFocus = () => {
        props.setTimerState(TimerState.Stopped)
        setInput("")
    }

    const onBlur = () => {
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

    const val = (props.timerState === TimerState.Running) ? 
                    msToString(props.curMseconds) : 
                    inputToString(input)

    return (
        <input
            className="TimerBox"
            type="text"
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onChange={()=>{}}
            value={val}
        />
    )
}

export { TimerInput }