import React, { useState } from 'react';
import { StartStopButton, TimerComponent } from './components'
import './App.css';
import { msToString } from "./Utils"

export enum TimerState {
  Stopped = "Stopped",
  Running = "Running"
}

function App() {
  const [timerState, setTimerState] = useState(TimerState.Stopped)
  const [msecTarget, setMsecTarget] = useState(0)
  const [curMseconds, setCurMseconds] = useState(0)

  return (
    <div className="TimerApp">
      <h1>Knob</h1>
      <h1>Milliseconds target: {msToString(msecTarget)}</h1>
      <h1>State: {timerState}</h1>
      <TimerComponent
        msecTarget={msecTarget}
        setMsecTarget={setMsecTarget}
        setTimerState={setTimerState}
        curMseconds={curMseconds}
        setCurMseconds={setCurMseconds}
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
