import React, {useState} from 'react';
import { TimerState } from "../App";
import { TimerInput } from "./TimerInput";
import { TimerDisplay } from "./TimerDisplay";
import "./TimerInput.css"

export enum TimerComponentMode {
    Display = "Display",
    Input = "Input"
}

interface ITimerComponentProps {
    setTimerState: (timerState: TimerState) => void,
    msecTarget: number,
    setMsecTarget: (seconds: number) => void,
    curMseconds: number,
    setCurMseconds: (seconds: number) => void
}

function TimerComponent(props: ITimerComponentProps) {
    const [mode, setMode] = useState(TimerComponentMode.Display)

    if (mode === TimerComponentMode.Display) {
        return (
            <TimerDisplay
                curMseconds={props.curMseconds}
                setTimerState={props.setTimerState}
                setMode={setMode}
            />
        )
    } else {
        return (
            <TimerInput
                msecTarget={props.msecTarget}
                setMsecTarget={props.setMsecTarget}
                setTimerState={props.setTimerState}
                setMode={setMode}
                setCurMseconds={props.setCurMseconds}
            />
        )
    }
}

export { TimerComponent }