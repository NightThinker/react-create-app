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

  switchNameHandler = () => {
    console.log("click");
    this.setState({
      person: [
        {name: 'Max', age: 'blue'},
        {name: 'Maximun', age: 'yellow'},
        {name: 'Mininum', age: 'red'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchNameHandler}>My Hobbies: Music</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
