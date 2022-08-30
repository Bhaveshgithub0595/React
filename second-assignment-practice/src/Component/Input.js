import React from 'react';

const Input = (props) => {

    return (
        <div>
            <input onChange={props.change} />
        </div>
    )
}

export default Input;