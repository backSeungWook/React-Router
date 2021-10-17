<a href='https://github.com/backSeungWook/React-Router#hookscontext-examplespart2'> Part 이동 </a>

# React router(Part1)
```
npm i react-router-dom
```
cra 에 기본 내장된 패키지가 아님.  
react-router-dom 은 Facebook 의 공식 패키지는 아니며, 가장 대표적인 라우팅 패키지입니다.

## 특정 경로에 보여줄 컴포넌트
```js
//src/App.js
import './App.css';
import { BrowserRouter ,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Abot from "./pages/Abot"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={Abot} />
    </BrowserRouter>
  );
}

export default App;
```
`-` Route 컴포넌트에 경로(path) 와 컴포넌트(component) 를 설정하여 나열해준다.  
`-` BrowserRouter 밑네 Route 지정.  
`-` 브라우저에서 요청한 경로에 Route 의 path 가 들어있으면 해당 component 를 보여준다.  
`-` 정확한 링크일 때만 보여주고 싶으면 exact 키워드 Route 사용.

## 동적 라우팅
```js
//:뒤에 params(String type)변수 값 지정
<Route path="/profile/:id" component={Profile} />
```
### key & value 
쿼리스트링 : x.x.x.x/?name=123 가져오는 방법  
`1.` URLSearchParams 사용(JavaScript MDN)
```js
const searchParams = props.location.search
const obj = new URLSearchParams(searchParams)
//http://localhost:3000/about?name=123&name2=321
//obj.get("Value 값")
console.log('URLSearchParams: ',obj.get("name2"))// => 321 출력
```
`2.` query-string -S 패키지 사용(npm)
```
npm i query-string
```
```js
import queryString from 'query-string'

//입력 값  http://localhost:3000/about?name=123&name2=321
const query = queryString.parse(searchParams)
console.log('query-string : ',query)//=> {name:123,name2:321}
```

## Switch, NotFound
여러 Route 중 순서대로 먼저 맞는 하나만 보여준다.
exact 를 뺄 수 있는 로직을 만들 수 있게 해준다.
가장 마지막에 어디 path 에도 맞지 않으면 보여지는 컴포넌트를 설정해서,
"Not Found" 페이지를 만들 수 있다.
```js
import { BrowserRouter ,Route ,Swithch} from 'react-router-dom';

<BrowserRouter>
  <Swithch>
    /*if 1-10
      else if 1-100
      else if 1-1000
      else if 1-10000 이러 한 if - else 형태로 하면 굳이 exact를 할 필요는 없음.
      단 모든 범위를 가지고있는 라우터는 exact를 해줘야 함
    */
    <Route path="/profile/:id" component={Profile} />
    <Route path="/profile" component={Profile} />
    <Route path="/about" component={Abot} />
    <Route path="/" exact component={Home} />
    <Route component = {NotFound} /> //위4 가지 경우 빼고는 컴포넌트가 NotFound를 바라보고 있음.
  </Swithch>
</BrowserRouter>
```

## JSX링크로 라우팅 이동.
```js
import { Link } from 'react-router-dom'

<Link to="/">Home</Link>
```
브라우저의 주소를 바꾸고, 맞는 Route 로 화면을 변경  

### NavLink
```js
import { NavLink } from 'react-router-dom'
```
activeClassName, activeStyle 처럼 active 상태에 대한 스타일 지정이 가능  
Route 의 path 처럼 동작하기 때문에 exact 가 있다.

```js
//js 에서 라우팅 
props.history.push("경로")
```

### Redirect
```js
import { Redirect } from 'react-router-dom';

// jsx
<Redirect to="/" />
```

# React Style
Scss를 사용하기 위해서는 scss를 설치
```
npm i sass
or
npm i node-sass
```

## CSS or SASS module
클래스의 이름을 고유하게 바꿔주기 때문 프로젝트가 커지면 본의 아니게 같은 이름을 사용하는 경우가 생긴다. 
그래서 각각의 이름을 고유하게 만들어서 본의아니게 겹치지 않도록 만들어주는 역할을 하는 것이 css module.
```js
//규칙은 이름.module.[css | sass]
import styles from './App.module.css';

<div className={styles["header"]}> ... </div>
```
```js
//style class이름을 쉽게 사용할수있게 해주는 모듈.
//npm i classnames 설치
import classNames from "classnames"

console.log(
  classNames(null,false,"bar",undefinde,0,1,{baz:null},"")
)//=> bar 1 만 출력
```

## styled-components 
javascript에서 css를 사용 할 수 있도록 도와주는 스타일링 프레임워크  
현존하는 CSS in JS 관련 리액트 라이브러리 중에서 가장 인기 있는 라이브러리.   
이에 대한 대안으로는 emotion 와 styled-jsx가 있다.
```
npm i styled-components
```

## React Shadow
공통으로 사용하는 CSS영향 없이 특정 컴포넌트에서만 정의해준 CSS가 적용.
```
npm i react-shadow
```
```js
import root from "react-shadow"

const styles = `css 문법`;

<root.div>      
  <Route path="/about" component={Abot} />
  <style type="text/css">{styles}</style>
</root.div>
```

## Ant Design
UI 라이브러리 중 하나.
```
npm i antd
```
Ant CSS 적용하기.
```js
//index.js
import "antd/dist/antd.css"
//혹은 해당 dom css 만 import
import 'antd/es/date-picker/style/css'
```
ICON 사용시 
```
npm i --save @ant-design/icons
```

</br></br></br>

# Hooks,Context Examples(Part2)

</br>

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


