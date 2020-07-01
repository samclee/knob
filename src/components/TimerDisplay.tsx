import React from "react";
import { TimerState } from "../App";
import { TimerComponentMode } from "./TimerComponent";
import { msToString } from "../Utils";

interface ITimerDisplayProps {
    curMseconds: number,
    setTimerState: (timerState: TimerState) => void,
    setMode: (mode: TimerComponentMode) => void
}

function TimerDisplay(props: ITimerDisplayProps) {

    const onClick = () => {
        props.setTimerState(TimerState.Stopped)
        props.setMode(TimerComponentMode.Input)
    }

    return (
        <input
            className="TimerBox"
            type="text"
            onClick={onClick}
            onChange={()=>{}}
            value={msToString(props.curMseconds)}
        />
    )
}

export { TimerDisplay }