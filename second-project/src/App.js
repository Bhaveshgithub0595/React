
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

//APP COMONENTS USING CLASS AND COMPONENTS
//USE OF STATE

class App extends React.Component {

  // var something = someValue
  state = {
    persons: [
        {id: "asfa1", name: 'Max', age : 28},
        {id: "vasdf1", name: 'Manu', age : 29},
        {id: "asdf1", name: 'Stepheni', age : 26}
    ], 
    otherState: 'some other value',
    showPersons: false

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; //morden approch
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.person[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons} );
  }

  togglePersonHandler = (event ) => {
    console.log(this.state.showPersons)
    const doesShow  = this.state.showPersons;
    
    console.log(doesShow);
    this.setState({showPersons:!doesShow});
    console.log(this.state.showPersons)
  }

render() {

  const style = { 
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if(this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
           onclick={() => this.deletePersonHandler(index)}
           name ={person.name}
           age = {person.age} 
           key ={person.id}
           changed = {(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
    );
  }
  return (
    <div className="App">
      
      <h1> Hi I am Bhavesh</h1>
      <p> This is realy Working!!!</p>
      <button 
        style={style}
        onClick={this.togglePersonHandler} >Switch Name</button>
      
      
      
      {persons}

    </div>
    // <h1>Another heading</h1> This is the another restriction
  );
  }
}

  
export default App;
  
    