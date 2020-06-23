import React, { useState } from 'react';
import './App.css';

enum TimerState {
  Stopped = 1,
  Running
}

function App() {
  const [timerState, setTimerState] = useState(TimerState.Stopped)

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
      <input type="text" />
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
