import React from 'react';

const person = (props) => {
    //console.log('props: ', props)
    return (
        <div>
        <p onClick={props.click}>I'm a person! My name is {props.name} and my age is {props.age}.</p>
        {props.children}
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;





// Code Commit- 3.46.0