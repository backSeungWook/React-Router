//useMemo or useCallback
import {useState,useMemo, useCallback} from "react"

function sum(persons) {
  console.log('useMemo',persons)
  return persons.map(persons => persons.age).reduce((l,r) => l+r,0)
}

export default function HooksExample4() {
  const [value,setValue] = useState('')
  const [persons] = useState([
    {name:'mark',age:39},
    {name:'Hanna',age:28}
  ])

  //input value 변경 시 persons값이 변경이 안되어도 sum이 실행이 됨.
  //const count = sum(persons)
  // => 위 로직 최적화. persons값이 변경이 안되면 초기에만 실행 하고 후에는 실행이 안됨.
  const count = useMemo(()=>{
    return sum(persons)
    
  },[persons])

  //
  const click = useCallback(() =>{
    console.log(value)
  },[value])
  

  return(
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>useCallback</button>
    </div>
  )

  function change(e) {
    setValue(e.target.value)
  }
  
}