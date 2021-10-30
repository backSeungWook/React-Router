//useRef
import {createRef,useRef,useState} from "react"


export default function HooksExample5() {
  const [value2,setValue2] = useState('')
  const input1Ref = createRef()
  const input2Ref = useRef()

  console.log('useRef: ',input1Ref.current,input2Ref.current)

  

  return(
    <div>
      <input value={value2} onChange={hookchange} />
      <input type="text" defaultValue='createRef()' ref={input1Ref} />
      <input type="text" ref={input2Ref} defaultValue='useRef()'/>
    </div>
  )

  function hookchange(e) {
    setValue2(e.target.value)
  }
  
}
