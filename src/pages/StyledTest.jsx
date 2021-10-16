import styled, { createGlobalStyle } from 'styled-components'
import StyledButton from '../components/StyledButton'
import StyldeA from '../components/StyldeA'

export default function StyledTest(){

  //StyledButton 재정의
  const PrimaryStyledButton = styled(StyledButton)`
  background:palevioletred;
  color:white;
  `
  
  const MyButtonStyled  = (props) => (
    <button className={props.className} children = {`MyButtonStyled ${props.children}`}/>
   )
  
  //styled에 매개변수로 컴포넌트
  const StyledMyButton = styled(MyButtonStyled)`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 1em;
  `
  //<StyledButton primary>버튼</StyledButton> primary = props
  
  //내가 정의한 컴포넌트를 a태크처럼 사용하겠다. / 특정 컴포넌트도 지정 가능. as="사용할 태그"
  //<StyledButton as="a" href="/">styled-components</StyledButton>

  //글로벌 함수로 정의
  const GlobalStyle = createGlobalStyle`
    button{
      color:yellow;
    }
  `

  return(
    <div>
      <GlobalStyle />
      <StyledButton>styled-components</StyledButton>
      <StyledButton primary>styled-components2</StyledButton>
      <PrimaryStyledButton>styled-components3</PrimaryStyledButton>
      <StyledButton as="a" href="/">styled-components</StyledButton>
      <StyledMyButton>styled(컴포넌트)</StyledMyButton>
      <StyldeA href="http://naver.com" color="red">기본attr 지정</StyldeA>
    </div>
  )
}