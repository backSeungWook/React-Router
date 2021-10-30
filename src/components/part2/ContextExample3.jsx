import PersonContext from "../../contexts/PersonContext";
import {useContext} from 'react'

export default function ContextExample3() {
  const persons = useContext(PersonContext)
  return(
    <ul>
      {persons.map((person) =>(
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  )
}