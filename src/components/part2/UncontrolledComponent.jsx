import React from "react";

class UncontrolledComponent extends React.Component{
  inputRef = React.createRef()
  state = {
    value:""
  }
  render(){
    console.log('UncontrolledComponent render Start',this.inputRef)
    return(
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.click}>전송</button>
        
        <p>UncontrolledComponent input <font color="red">{this.state.value}</font> .</p>
      </div>
    )
  }
  //렌더링 된 후 호출
  componentDidMount(){
    console.log('componentDidMount',this.inputRef)
  }

  click = ()=>{
    console.log('UncontrolledComponent Click: ',this.inputRef.current.value)
    this.setState({value:this.inputRef.current.value})
  }
}

export default UncontrolledComponent