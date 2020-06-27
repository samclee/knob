import React, { useState } from 'react';
import TimerInput from './components/TimerInput'
import './App.css';

export enum TimerState {
  Stopped = "Stopped",
  Running = "Running"
}

function App() {
  const [timerState, setTimerState] = useState(TimerState.Stopped)
  const [msecTarget, setMsecTarget] = useState(0)

  const onStartStopButtonPress = () => {
    if (timerState === TimerState.Running) {
      setTimerState(TimerState.Stopped)
    } else if (timerState === TimerState.Stopped) {
      setTimerState(TimerState.Running)
    }
  }

  const startStopText = (timerState === TimerState.Running) ? "Stop" : "Start";

  return (
    <div className="TimerApp">
      <h1>Knob</h1>
        <h1>Milliseconds: {msecTarget}</h1>
        <h1>State: {timerState}</h1>
        <TimerInput
          msecTarget={msecTarget}
          setMsecTarget={setMsecTarget}
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
