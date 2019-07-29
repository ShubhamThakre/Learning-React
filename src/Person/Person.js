import React from 'react';

// Code Commit- 3.44.0
//following is exampole of stateless functions
const person = (props) => {
    //console.log('props: ', props)
    return (
        <div>
        <p>I'm a person! My name is {props.name} and my age is {props.age}.</p>
        {props.children}
        </div>
    );
}

export default person;