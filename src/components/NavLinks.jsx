import {NavLink} from 'react-router-dom';

const activeStyle = {color:"red"}

export default function NavLinks(){
  return(
    <ul>
      <li><NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink></li>
      <li><NavLink to="/profile" exact activeStyle={activeStyle}>Profile</NavLink></li>
      <li><NavLink to="/profile/1" activeStyle={activeStyle}>Profile1!</NavLink></li>
      <li>
        <NavLink to="/about" 
          activeStyle={activeStyle} 
          isActive={(match,location) =>{
            return match !== null && location.search === ""
          }}
        >
        About
        </NavLink>
      </li>
      <li>
        <NavLink to="/about?name=test"
          activeStyle={activeStyle}
          isActive={(match,location) =>{
            return match !== null && location.search === "?name=test"
          }}
        >
        About?name=test
        </NavLink>
      </li>
    </ul>
  )
}