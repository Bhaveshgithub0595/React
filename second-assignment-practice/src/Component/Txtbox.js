import React from 'react';

const style = { 
    backgroundColor: 'red',
    
    // display: 'inline-block',
    padding: '16px',
    // text-align: 'center', 
    margin: '16px', 
    border: '3px solid black',
  };

const Txtbox=(props)=> {
    return(
        <div style={style}>
            {props.char}
        </div>
    )
}

export default Txtbox; 