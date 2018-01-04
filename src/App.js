import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  state = {
    person: [
      {name: 'Katze', age: 'gato'},
      {name: 'siba', age: 'blue'},
      {name: 'pug', age: 'pink'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm</h1>
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Music</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
