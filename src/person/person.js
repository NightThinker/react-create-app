import React from 'react';
import Radium from 'radium';
import './person.css';


const person = (props) =>  {
  const style = {
    '@media (min-width: 500px)' : {
      width : '450px',
      color: 'red'
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.clicks}>I'm {props.name} and {props.age} years old.</p> 
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Radium(person)