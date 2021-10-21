//useRef
import {createRef,useRef,useState} from "react"


export default function HooksExample5() {
  const [value,setValue] = useState('')
  const input1Ref = createRef()
  const input2Ref = useRef()

  console.log('useRef: ',input1Ref.current,input2Ref.current)

  

  return(
    <div>
      <input value={value} onChange={change} />
      <input type="text" value='createRef()' ref={input1Ref} />
      <input type="text" ref={input2Ref} value='useRef()'/>
    </div>
  )

  function change(e) {
    setValue(e.target.value)
  }
  
}
