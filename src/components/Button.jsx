import React from "react"
import styles from "./Button.module.css"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

class Button extends React.Component{
  state = {
    loading:false
  }
  
  render(){
    console.log(classNames('foo','bar'))
    const {loading} = this.state
    return <button 
        onClick={this.startLoading} 
        /*className={
          this.state.loading ? 
          `${styles["button"]}  ${styles["loading"]}`
           : styles["button"] 
          }
          classNames 모듈을 사용하기 때문에 사용 안함.
          */
          className={
            cx("button",{loading})
          }
        {...this.props}
      />
  }

  startLoading = () =>{
    this.setState({
      loading:true
    })
    setTimeout(()=>{
      this.setState({
        loading:false
      })
    },1000)
  }
}
 

export default Button