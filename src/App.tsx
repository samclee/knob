import React, { useState } from 'react';
import TimerDisplay from './components/TimerDisplay'
import './App.css';

export enum TimerState {
  Stopped = 1,
  Running
}

function App() {
  const [timerState, setTimerState] = useState(TimerState.Stopped)
  const [seconds, setSeconds] = useState(0)

  const onStartStopButtonPress = () => {
    if (timerState === TimerState.Running) {
      setTimerState(TimerState.Stopped)
      console.log("stopped")
    } else if (timerState === TimerState.Stopped) {
      setTimerState(TimerState.Running)
      console.log("running")
    }
  }

  const startStopText = (timerState === TimerState.Running) ? "Stop" : "Start";

  return (
    <div className="TimerApp">
      <h1>Knob</h1>
        <TimerDisplay
          seconds={seconds}
          setSeconds={setSeconds}
          setTimerState={setTimerState}
        />
      <div>
        <button onClick={onStartStopButtonPress}>{startStopText}</button>
        <button>reset</button>
      </div> 
      <input type="checkbox" />
      <label>Reset on timeout</label>
    </div>
  );
}

export default App;
