import React from 'react';
import './App.css';
// import Greet from './components/Greet'
// import EventBind from './components/Eventbind'
import Parent from './components/Parent'
import NameList from './components/NameList'
import StyleTest from './components/Styletest'
import Fragment from './components/Fragment'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import RenderProps from './components/RenderProps'



function App() {
  return (
    <div className="App">
      {/* <EventBind /> */}
        {/* <Parent /> */}
        {/* <NameList /> */}
      {/* <StyleTest primary={false}/> */}
      {/* <Greet name={'Dinesh'}/> */}
    <RenderProps />
    {/* <ClickCounter name = 'Mohana'/> */}
    {/* <HoverCounter /> */}
    {/* <Fragment /> */}



    </div>
  );
}

export default App;

let employee = ['Christoph', 'Walter', 28, 'Male'] 
let [fname, lname, age, gender] = employee