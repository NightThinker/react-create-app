import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm</h1>
        <Person name="Mac" age="25"/>
        <Person name="PanPan" age="22">My Hobbies: Music</Person>
        <Person name="KFC" age="30"/>
      </div>
    );
  }
}

export default App;
