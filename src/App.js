import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  state = {
    person: [
      {name: 'Katze', age: 'gato'},
      {name: 'siba', age: 'blue'},
      {name: 'pug', age: 'pink'}
    ],
    otherState: 'some one'
  }

  switchNameHandler = (newName) => {
    console.log("click");
    this.setState({
      person: [
        {name: newName, age: 'blue'},
        {name: 'Maximun', age: 'yellow'},
        {name: 'Mininum', age: 'red'}
      ]
    })
  }

  nameChangeHandler = (event) => {
    console.log("change");
    this.setState({
      person: [
        {name: event.target.value, age: 'blue'},
        {name: 'Maximun', age: 'yellow'},
        {name: 'Mininum', age: 'red'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      border: '2px solid yellow',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('anyone super')}
          >Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'howold')}
          changed={this.nameChangeHandler}>My Hobbies: Music</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
