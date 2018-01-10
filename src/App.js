import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './person/person';

class App extends Component {
  state = {
    person: [
      {id:'01', name: 'Katze', age: 'gato'},
      {id:'02', name: 'siba', age: 'blue'},
      {id:'03', name: 'pug', age: 'pink'}
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex( p => {
      return p.id === id;
    });
    const person = { 
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    // const person = Object.assign({}, this.state.person[personIndex]);
    console.log("change");
    this.setState({
      person: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.person;
    // console.log('persons: ', persons);
    persons.splice(personIndex,1);
    this.setState({person:persons});
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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
              clicks={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div> 
      );
      style.backgroundColor = 'pink';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes =[];
    // classes = 'red bold'

    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(' ')}>Hi, I'm</h1>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Toggle Person</button>
            {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
