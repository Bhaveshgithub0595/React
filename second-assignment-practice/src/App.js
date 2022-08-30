import React from 'react';
import './App.css';
import Input from './Component/Input';
import Output from './Component/Output';
import Validation from './Component/Validation';
import Txtbox from './Component/Txtbox';


class App extends React.Component {

  state = {
    text: "",

  }

  changeHandler = (event)=>{
    const textu=event.target.value;
    this.setState({text:textu})
  }

  render() {

    const style = { 
      backgroundColor: 'green',
      
      // display: 'inline-block',
      padding: '16px',
      // text-align: 'center', 
      margin: '16px', 
      border: '3px solid black',
    };

    const Textboxs = this.state.text.split('').map(ch=>{
      return <Txtbox char={ch}/>;
    })


    var Valid = null;
    if(this.state.text.length>=8){
      Valid = (<div>The text in textbox is long </div>)
    }
    else if(this.state.text.length===0){
      Valid = (<div>The text in textbox is empty </div>)
    }
    else{
      Valid = (<div>The text in textbox is Short </div>)
    }

    return (
      <div className='App' style={style}>
        <Input change = {this.changeHandler} />
        <Validation answer = {Valid}/>
        <Output textbox = {Textboxs}/>
      </div>
    )
    
  }

}
export default App;
