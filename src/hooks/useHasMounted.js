import { useEffect,useState } from "react/cjs/react.development"

export default function useHasMounted(){
  const [hasMounted,setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  },[])

  return hasMounted
}