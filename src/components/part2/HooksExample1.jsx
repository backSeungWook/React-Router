import React from "react"

/*
export default class Example1 extends React.Component{
  state = {
    count:0
  }
  render(){    
    const{count} = this.state
    return(
      <div>
        <p>You Clicked {count} times</p>
        <button onClick={this.click}>useState</button>
      </div>
      
    )
  }
  click =()=>{
    this.setState({count:this.state.count+1})
  }
}
기존 state를 사용 시 클래스 컴포넌트를 만들어서 사용.
*/

//아래는 Hook을 이용한 function 컴포넌트 안에서 State 사용하기
export default function  Example1() {
  //첫번째 배열: 초기 값 변수 / 2번째 배열: 변수값을 변경 및 함수 컴포넌트 재실행
  //const [count,setCount] = React.useState(0)
  //==>
  const [state,setState] = React.useState({count:0})
  
  return(
    <div >
        <p>You Clicked useState {state.count}  times</p>
        <button onClick={click}>useState</button>
      </div>
  )

  function click() {
    //setState({count:state.count+1})
    //==> 함수로
    setState((state) =>{
      return{
        count:state.count+1
      }
    })
    /*
    or 
    setState((state) =>(
      return{
        count:state.count+1
      })
    )
    */
  }
}
