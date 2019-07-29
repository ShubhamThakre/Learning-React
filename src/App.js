import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons : [
      { name:'Max', age: 32 },
      { name:'Manu', age: 29 }
    ]
  }

  switchNameHandler = (newName) =>{
    // console.log('ws clicked');
    // dont do this => this.state.person[0].name ='macc'
    this.setState({
      persons : [
        { name:newName, age: 30 },
        { name:'Man', age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I am React</h1>
        <p> This is Paragraph..</p>
        
        <button 
          onClick={() => this.switchNameHandler('Max !!')}>Swich Button</button>
        <Person 
          name = {this.state.persons[0].name} 
          age ={this.state.persons[0].age} />
        <Person 
          name =  {this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}>My Hobbies are racing and dancing.</Person>
      </div>
    );
  }
}


export default App;





// Udemy Section 3. Lect 45. Passing method reference between the components.
// Discription-  functions that are having states are statefull components. 
// Functions that are not having state are stateless components. 
// Always recommended to have stateless functions. 

// Code Commit- 3.45.0
