
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

//APP COMONENTS USING CLASS AND COMPONENTS
//USE OF STATE

class App extends React.Component {

  // var something = someValue
  state = {
    persons: [
        {name: 'Max', age : 28},
        {name: 'Manu', age : 29},
        {name: 'Stepheni', age : 26}
    ], 

  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    // DON'T DO THIS this.state.persons[0],name = "Maximilian";
    this.setState({persons: [
      {name: newName, age : 28},
      {name: 'Manu', age : 29},
      {name: 'Stepheni', age : 26}
  ], })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max' , age : 28},
      {name: event.target.value , age : 29},
      {name: 'Stepheni', age : 26}
  ], })
  }

render() {

  const style = { 
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      
      <h1> Hi I am Bhavesh</h1>
      <p> This is realy Working!!!</p>
      <button 
        style={style}
        onClick={() => this.switchNameHandler} >Switch Name</button>
      
      {/* <Person name="Max" age="28" />
      <Person name="Max" age="29" >My Hoobies: Lol</Person>
      <Person name="Stepen" age="26" /> */}
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}  />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        onclick = {this.switchNameHandler.bind(this, 'Max!')}
        changed = {this.nameChangedHandler}  >My Hobbies: Racing</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}  />
    </div>
    // <h1>Another heading</h1> This is the another restriction
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world') , 'Hi I\'m Bhavesh')
  }
}

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//         {name: 'Max', age : 28},
//         {name: 'Manu', age : 29},
//         {name: 'Stepheni', age : 26}
//       ], 
//       otherState: 'some other value'
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState);

//   const switchNameHandler = () => {
//     console.log('Was Clicked!');
//     //DON'T DO THIS this.state.persons[0],name = "Maximilian";
//     setPersonsState({
//       persons: [
//         {name: 'Manimulis', age : 28},
//         {name: 'Manu', age : 29},
//         {name: 'Stepheni', age : 26}
//       ] 
//       // otherState: personsState.otherState
//      });
// }; 

//     return (
//           <div className="App">
            
//             <h1> Hi I am Bhavesh</h1>
//             <p> This is realy Working!!!</p>
//             <button onClick={switchNameHandler} >Switch Name</button>
//             {/* <Person name="Max" age="28" />
//             <Person name="Max" age="29" >My Hoobies: Lol</Person>
//             <Person name="Stepen" age="26" /> */}
//             <Person 
//               name={personsState.persons[0].name} 
//               age={personsState.persons[0].age}  />
//             <Person 
//               name={personsState.persons[1].name} 
//               age={personsState.persons[1].age}  >My Hobbies: Racing</Person>
//             <Person 
//               name={personsState.persons[2].name} 
//               age={personsState.persons[2].age}  />
//           </div>
//           // <h1>Another heading</h1> This is the another restriction
//         );
//   }
  
  
  export default App;
  
    