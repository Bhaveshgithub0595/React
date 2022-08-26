
import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  
  return (
    <div className="App">
      
      <h1> Hi I am Bhavesh</h1>
      <p></p>

      <Person name="Max" age="28" />
      <Person name="Max" age="29" />
      <Person name="Stepen" age="26" />

    </div>
    // <h1>Another heading</h1> This is the another restriction
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world') , 'Hi I\'m Bhavesh')

}

export default App;
