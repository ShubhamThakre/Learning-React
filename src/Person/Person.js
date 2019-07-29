import React from 'react';
import  './Person.css'

const person = (props) => {
    //console.log('props: ', props)
    return (
        <div className="Person">
        <p 
            onClick={props.click}>My name is {props.name} and my age is {props.age}.</p>
        {props.children}
        <input 
            type="text" 
            onChange={props.changed} />
        </div>
    );
}

export default person;





// Code Commit- 3.47.0 + 3.48.0