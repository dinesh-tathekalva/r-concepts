import React from 'react';
import './App.css';
import Greet from './components/Greet'
import EventBind from './components/Eventbind'
import Parent from './components/Parent'

function App() {
  return (
    <div className="App">
      {/* <EventBind /> */}
      <div>
        <Parent />
      </div>
      {/* <Greet name={'Dinesh'}/> */}
    </div>
  );
}

export default App;
