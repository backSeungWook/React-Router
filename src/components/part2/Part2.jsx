import Example1 from "./HooksExample1";
import Example2 from "./HooksExample2";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import styles from "./Part2.module.scss"
import HooksExample3 from "./HooksExample3";
import HooksExample4 from "./HooksExample4";
import HooksExample5 from "./HooksExample5";
import ContextExample1 from "./ContextExample1";
import ContextExample2 from "./ContextExample2";
import ContextExample3 from "./ContextExample3";
import Optimizing from "./Optimizing";


export default function Part2(){
  
  return(
    <div className={styles['pdiv']} >
      <h1>Part2 Example</h1>
      <Example1/>
      <Example2 />
      <ControlledComponent />
      <UncontrolledComponent />
      <HooksExample3 />
      <HooksExample4 />
      <HooksExample5 />
      PersonContext.Consumer
      <ContextExample1 />
      클래스 컴포넌트의 this.context
      <ContextExample2 />
      함수 컴포넌트의 useContext Hook
      <ContextExample3 />
      최적화 예제
      <Optimizing />
    </div>      
  )
}
