import React from "react"
import useWindowWidth from "../../hooks/useWindowWidth"
/*
export default class Example2 extends React.Component{
  state = {
    count:0
  }
  render(){    
    const{count} = this.state
    return(
      <div>
        <p>You Clicked useEffect{count} times</p>
        <button onClick={this.click}>useEffect</button>
      </div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount',this.state.count)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate',this.state.count)
  }

  click =()=>{
    this.setState({count:this.state.count+1})
  }
}
기존 라이프 사이클 사용 시 클래스 컴포넌트를 만들어서 사용.
*/

export default function  Example1() {
  //첫번째 배열: 초기 값 변수 / 2번째 배열: 변수값을 변경 및 함수 컴포넌트 재실행
  //const [count,setCount] = React.useState(0)
  //==>
  const [state,setState] = React.useState({count:0})

  //useEffect 1: 함수,
  //2: [] :빈 배열 값이 있으면 최초에만 실행 ,
  // 2번째 인자를 비우면 혹은 배열 값을 채우면 랜더되면 항상 실행 
  React.useEffect(()=>{
    console.log('componentDidMount1')
  },[])

  React.useEffect(()=>{
    console.log('componentDidMount && componentDidUpdate by1 count',state.count)
  },[state.count])

  React.useEffect(()=>{
    console.log('componentDidMount2')
    return() =>{
      //cleanup
      // componentWillUnmount
      console.log('componentDidMount2 => componentWillUnmount')
    }
  },[])

  React.useEffect(()=>{
    console.log('componentDidMount && componentDidUpdate by2 count',state.count)
    return() =>{
      //cleanup
      console.log('cleanup by count',state.count)
    }
  },[state.count])

  const width = useWindowWidth()

  return(
    
     <div>
        <p>You Clicked useState {state.count} times {width}</p>
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