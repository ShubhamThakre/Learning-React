// Udemy Section 3. lect 43. using the useState() Hook for State Manipulation
// Discription- This code is moreover use of state as functional management. This is no class based components. Through out this course we are using the class based approched. 
// Detail hook are given in detial in lect 26

import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';



const app = props => {
  
  const [ personState , setPersonState ] = useState ({
    persons : [
      { name:'Max', age: 32 },
      { name:'Manu', age: 29 }
    ],
    otherState: 'some other value'
  });


  console.log(personState);
  
  const switchNameHandler = () =>{
    // console.log('ws clicked');
    // dont do this => this.state.person[0].name ='macc'
    setPersonState({
      persons : [
        { name:'Maxu', age: 30 },
        { name:'Man', age: 25 }
      ],
      otherState: personState.otherState
    })
  };

  return (
    <div className="App">
      <h1>I am React</h1>
      <p> This is Paragraph..</p>
      <button onClick={switchNameHandler}>Swich Button</button>
      <Person name =  {personState.persons[0].name} age ={personState.persons[0].age} />
      <Person name =  {personState.persons[1].name} age ={personState.persons[1].age}>My Hobbies are racing and dancing.</Person>
    </div>
  );
}







export default app;
