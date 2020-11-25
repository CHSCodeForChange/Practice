import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>This is the main header right here.</h1>
            <p>Hi my name is {props.name} and I am {props.age}.</p>
            <p>{props.children}</p>
            <input type = 'text' onChange = {props.click} value = {props.name}/>
        </div>
    )
}

export default person;