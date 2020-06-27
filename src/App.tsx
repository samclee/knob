import React, { useState } from 'react';
import { TimerInput, StartStopButton } from './components'
import './App.css';
const prettyMs = require('pretty-ms');

export enum TimerState {
  Stopped = "Stopped",
  Running = "Running"
}

function App() {
  const [timerState, setTimerState] = useState(TimerState.Stopped)
  const [msecTarget, setMsecTarget] = useState(0)

  return (
    <div className="TimerApp">
      <h1>Knob</h1>
      <h1>Milliseconds target: {prettyMs(msecTarget)}</h1>
      <h1>State: {timerState}</h1>
      <TimerInput
        msecTarget={msecTarget}
        setMsecTarget={setMsecTarget}
        setTimerState={setTimerState}
      />
      <div>
        <StartStopButton
          timerState={timerState}
          setTimerState={setTimerState}
        />
        <button>reset</button>
      </div> 
      <input type="checkbox" />
      <label>Reset to target on timeout</label>
    </div>
  );
}

export default App;
