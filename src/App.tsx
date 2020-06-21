import React from 'react';
import './App.css';

enum TimerState {
  Stopped = 1,
  Running
}

function App() {
  return (
    <div className="TimerApp">
      <h1>Knob</h1>
      <input type="text" />
      <div>
        <button>start/stop</button>
        <button>reset</button>
      </div> 
      <input type="checkbox" />
      <label>Reset on timeout</label>
    </div>
  );
}

function stopTimer() {

}

function startTimer() {

}

export default App;
