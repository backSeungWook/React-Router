import React from 'react'

//HOC
export default function withHasMounted(Component) {
  class NewComponent extends React.Component{
    state ={
      hasMounted:false
    }

    render(){
      const {hasMounted} = this.state
      //{... this.props}  = 원래 withHasMounted props
      return <Component {... this.props} hasMounted={hasMounted}/>
    }

    //최초 렌더마친 후 실행
    componentDidMount(){
      this.setState({ hasMounted:true})
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`

  return NewComponent
}