import PersonContext from "../../contexts/PersonContext";
import React from 'react'

export default class ContextExample2 extends React.Component {
  static contextType = PersonContext
  render(){
    const persons = this.context
    return (
      <ul>
        {persons.map((person) =>(
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    )
  }
  
}