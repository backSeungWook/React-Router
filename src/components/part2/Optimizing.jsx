import React from 'react'

const Person = React.memo(({name,age}) => {
  console.log('Optimizing Ex Render')
  return(
    <div>
      {name} / {age}
    </div>
  )
})

function Optimizing(){
  const [state, setState] = React.useState({
    text:"",
    persons:[
      {id:1,name:'Mark',age:39},
      {id:2,name:'Hanna',age:29}
    ]
  })

  
  const toPersonClick = React.useCallback(() => {
    
  },[])

  const {text,persons} = state

  return(
    <div>
      <input type="text" value={text} onChange={onChange}/>
      <ul>
        {persons.map((person) =>{
          return <Person {...person} key={person.id} onClick={toPersonClick} />
        })}
      </ul>
    </div>
  ) 
  function onChange(e) {
    setState({
      ...state,
      text:e.target.values
    })
  }
  
}

export default Optimizing