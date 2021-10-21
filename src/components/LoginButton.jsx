import { useHistory } from "react-router-dom"

/* withRouter HOC 사용
import { withRouter } from "react-router-dom"
export default withRouter(function LoginButton(props){
  function login(){
    setTimeout(() =>{
      props.history.push("/")
    },1000)
  }
  return <button onClick={login}>로그인 하기</button>
})*/

//useHistory Hoks 사용
export default function LoginButton(){
  const history = useHistory()
  function login(){
    setTimeout(() =>{
      history.push("/")
    },1000)
  }
  return <button onClick={login}>로그인 하기</button>
}
