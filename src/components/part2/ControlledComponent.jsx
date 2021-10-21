import React from "react";
class ControlledComponent extends React.Component{
  state = {
    value:""
  }

  render(){
    const {value} = this.state
    return(
      <div>
        <input value={value} onChange={this.change}/>
        <button onClick={this.click}>전 송</button>
        
        <p>ControlledComponent Input <font color="red">{value}</font> .</p>
      </div>
      
    )
  }

  change = (e) =>{
    console.log('ControlledComponent: ',e.target.value)
    this.setState({value:e.target.value})
  }

  click = () =>{
    console.log('ControlledComponent Click: ',this.state.value)
    this.setState({value:'123'})
  }

}

export default ControlledComponent