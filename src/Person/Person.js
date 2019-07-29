import React from 'react';

const person = (props) => {
    //console.log('props: ', props)
    return (
        <div>
        <p onClick={props.click}>I'm a person! My name is {props.name} and my age is {props.age}.</p>
        {props.children}
        </div>
    );
}

export default person;





// Code Commit- 3.45.0