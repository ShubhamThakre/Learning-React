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

  nameChangeHandler = (event) =>{
    this.setState({
      persons : [
        { name:'Manu', age: 30 },
        { name:event.target.value, age: 25 }
      ]
    })
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      sursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>I am React</h1>
        <p> This is Paragraph..</p>
        
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Max !!')}>Swich Button</button>
        <Person 
          name = {this.state.persons[0].name} 
          age ={this.state.persons[0].age} />
        <Person 
          name =  {this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangeHandler}>My Hobbies are racing and dancing.</Person>
      </div>
    );
  }
}


export default App;





// Major Changes in Code- Implemented the Tab structure in code

// Code Commit- 3.47.0 + 3.48.0
