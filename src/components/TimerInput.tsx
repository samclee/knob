import React, {useState} from 'react';
import { TimerState } from "../App"

interface IProps {
    seconds: number,
    setSeconds: (seconds: number) => void,
    setTimerState: (timerState: TimerState) => void
}

function TimerInput(props: IProps) {
    const [input, setInput] = useState("");

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        props.setTimerState(TimerState.Stopped);
        setInput("")
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (input.length > 0) {
            props.setSeconds(parseInt(input));
        } else {
            props.setSeconds(0)
        }
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (Number.isInteger(parseInt(e.key))) {
            setInput(input + e.key)
        }
    }

    return (
        <input
            className="TimerDisplay"
            type="text"
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            value={input}
        />
    )
}

export default TimerInput