// Udemy Section 3. Lect 44. Stateless vs Statefull components.
// Discription-  functions that are having states are statefull components. 
// Functions that are not having state are stateless components. 
// Always recommended to have stateless functions. 

// Code Commit- 3.44.0


// Following is example of Statefull function.

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
