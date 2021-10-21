//useReducer
import {useReducer} from "react"

// reducer => state 를 변경하는 로직이 담겨 있는 함수
/* const reducer = (state,action) =>{
  return newState
}*/
const reducer = (state,action) =>{
  if(action.type === "PLUS"){
    return{
      count:state.count +1
    }    
  }
  return state
}
// dispatch => action 객체를 넣어서 실행
// action => 객체, 필수 프로퍼티로 type을 가진다.

export default function HooksExample3() {
  const [state,dispatch] = useReducer(reducer,{ count:0 })

  return(
    <div>
      <p>Clicked Hooks3 Example {state.count} times</p>
      <button onClick={click}>HooksE3</button>
    </div>
  )
  function click() {
    dispatch({type:"PLUS"})   
  }
  
}