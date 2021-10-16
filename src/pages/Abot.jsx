import queryString from 'query-string'

import Button from '../components/Button'


export default function Abot(props){
  
  const searchParams = props.location.search
  console.log(searchParams)
  const obj = new URLSearchParams(searchParams)
  //http://localhost:3000/about?name=123&name2=321
  console.log('URLSearchParams: ',obj.get("name2"))// => 321 출력

  const query = queryString.parse(searchParams)
  console.log('query-string : ',query)
  //{query.name && <p>name은 {query.name}.</p>} &&: 논리 연산자 query.name의 값 이 있으면 실행
  

  return (
    <div>
      <h2>Home Abot.</h2>
      {query.name && <p>name은 {query.name}.</p>}
      <Button>뒤로가기 </Button>
     
    </div>
  )
}