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
    otherState: 'some one',
    showPerson: false
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

  togglePersonHandler = () => {
    console.log("toggle");
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      border: '2px solid yellow',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
      </div>
    );
  }
}

export default App;
