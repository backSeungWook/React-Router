import {Link} from 'react-router-dom';

export default function Links(){
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/profile/1">Profile1!</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/styledtest">StyledTest</Link></li>
      <li><Link to="/antdexample">AntdExample</Link></li>
      
      <li><Link to="/about?name=test">About?name=test</Link></li>
      
    </ul>
  )
}
