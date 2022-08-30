import React from 'react';

import './Person.css';

const Person = (props) => {

    return (
        <div className='Person'>
            <p onClick={props.onclick}>I'm s {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} ></input>
        </div>
        //<p>I'm s {props.name} and I am {props.age} years old</p>
    
    )
}

export default Person;