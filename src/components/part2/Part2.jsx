import Example1 from "./HooksExample1";
import Example2 from "./HooksExample2";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import styles from "./Part2.module.scss"

export default function Part2(){
  return(
    <div className={styles['pdiv']}>
      <h1>Part2 Example</h1>
      <Example1/>
      <Example2 />
      <ControlledComponent />
      <UncontrolledComponent />
    </div>      
  )
}