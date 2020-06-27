import React from 'react'
import { TimerState } from "../App"

interface IStartStopButtonProps {
    timerState: TimerState,
    setTimerState: (timerState: TimerState) => void
}

function StartStopButton(props: IStartStopButtonProps) {
    const startStopText = (props.timerState === TimerState.Running) ? "Stop" : "Start";
    const onStartStopButtonPress = () => {
        if (props.timerState === TimerState.Running) {
          props.setTimerState(TimerState.Stopped)
        } else if (props.timerState === TimerState.Stopped) {
          props.setTimerState(TimerState.Running)
        }
      }
    return (
        <button onClick={onStartStopButtonPress}>{startStopText}</button>
    )
}

export { StartStopButton }