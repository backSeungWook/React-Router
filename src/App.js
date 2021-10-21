
import root from "react-shadow"
import { BrowserRouter ,Route ,Switch} from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Abot from "./pages/Abot"
import NotFound from "./pages/NotFound"
import Links from "./components/Links"
import NavLinks from "./components/NavLinks"
import Login from "./pages/Login"
import StyledTest from './pages/StyledTest';
import AntdExample from "./pages/AntdExample";
import Part2 from "./components/part2/Part2";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";

const styles = `
button{
  background:palevioletred;
  color:white;
}
`;

//HoC {hasMounted}
function App({hasMounted}) {

  const width = useWindowWidth()
  const hasMountedFromHooks = useHasMounted()

  console.log('hasMountedFromHooks',hasMountedFromHooks)

  console.log('HOC',hasMounted)


  return (
      
      <BrowserRouter>
        <h1>Router,Style or Hooks,Context Examples </h1>  
        <Links />
        <NavLinks />
        
        {width}
        <Switch>  
          <Route path="/login" component={Login}/>
          <Route path="/part2" component={Part2}/>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/antdexample" component={AntdExample} />
          <Route path="/styledtest" component={StyledTest} />
          <Route path="/about" component={Abot} />
          <root.div>      
            <Route path="/react-shadow" component={Abot} />
            <style type="text/css">{styles}</style>
          </root.div>
          <Route path="/" exact component={Home} />
          
          <Route component = {NotFound} />
          
        </Switch>
      </BrowserRouter>
      
  );
}

//HoC
export default withHasMounted(App);


