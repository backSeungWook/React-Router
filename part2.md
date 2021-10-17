# Higher-Order Components(고차 컴포넌트)
https://ko.reactjs.org/docs/higher-order-components.html
포넌트 로직을 재사용하기 위한 React의 고급 기술  
React API의 일부가 아니며, React의 구성적 특성에서 나오는 패턴  
HOC는 컴포넌트를 인자로 받으면 새로운 컴포넌트를 리턴 하는 함수.  
랜더 함수에서 사용 하면 안된다.

</br>

# Controlled or Uncontrolled
```
ControlledComponent.jsx
UncontrolledComponent.jsx
```
Controlled : 엘리먼트를 가지고있는 컴포넌트가 관리.  
ex) 이메일 입력(state 변경) 하는 매 순간 순간 마다 이메일 형식을 확인하는 방식
Uncontrolled : 엘리먼트의 상태를 관리하지 않고, 엘리먼트의 참조만 컴포넌트가 소유  
React.createRef() 라는 메소드를 사용하여 특정 엘리먼트를 참조 할 수 있다.

</br>

# Hooks & Context
- Hooks : 클래스 컴포넌트 에서만 State를 사용하고, 라이프사이클을 사용할수 있었던 부분을 Function 컴포넌트에서도 사용 가능하게 해주며, state를 재사용 할수 있게 해준다  
- Context : 컴포넌트간의 통신을 위한 API  

## Basic Hooks
최상위(at the Top Level)에서만 Hook을 호출해야 하며, 오직 React 함수 내에서 Hook을 호출해야 한다.  

`useState : `첫번째 배열: 초기 값 변수 / 2번째 배열: 변수값을 변경 및 함수 컴포넌트 재실행
```js
//<HooksExample1>
export default function  Example1() {
  const [count,setCount] = React.useState(0)
  return(
    <div>
        <p>You Clicked {count} times</p>
        <button onClick={click}>useState</button>
      </div>
  )

  function click() {
    setCount(count+1)
  }
}
```
`useEffect : `라이프 사이클 훅을 대체 할 수 있다.
<a href="https://rinae.dev/posts/a-complete-guide-to-useeffect-ko">`useEffect 완벽 가이드`</a>  
- componentDidMount
- componentDidUpdate
- componentWillUnmount  

```js
//<HooksExample2>
React.useEffect(()=>{
  console.log('componentDidMount2')
  return() =>{
    //cleanup
    // componentWillUnmount
  }
},[])

React.useEffect(()=>{
  console.log('componentDidMount && componentDidUpdate by2 count',state.count)
  return() =>{
    //cleanup
    console.log('cleanup by count',state.count)
  }
},[state.count])
```

## Custom Hooks


