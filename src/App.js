import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm</h1>
        <Person />
      </div>
    );
  }
}

export default App;
