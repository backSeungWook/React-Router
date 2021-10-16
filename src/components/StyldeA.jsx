import styled from "styled-components";

//기본 attrs 로 target을 _BLANK 속성 지정.
const StyldeA = styled.a.attrs(() => ({
  target:"_BLANK"
}))`
  color:${(props) => props.color}
`

export default StyldeA 
