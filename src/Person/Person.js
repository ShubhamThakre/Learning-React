import React from 'react';

const person = (props) => {
    console.log('props: ', props)
    return (
        <div>
        <p>I'm a person! My name is {props.name} and my age is {props.age}.</p>
        {props.children}
        </div>
    );
}

export default person;