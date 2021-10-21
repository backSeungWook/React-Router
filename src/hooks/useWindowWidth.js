import {useState, useEffect} from 'react'
//사용자 정의 Hook
export default function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const resize = () =>{
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize",resize)
    console.log('Hooks')

    return() =>{
      window.removeEventListener("resize",resize)
    }
  },[])

  return width
}