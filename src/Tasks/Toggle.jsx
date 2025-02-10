import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state={
            name:"sree",
            isvisible:true
        }
    }
    handletoggle=()=>{
        this.setState({
            isvisible:!this.state.isvisible
        })
    }
    render(){
        return(
        <>
        <h1>Toggle task</h1>
        <h3>{this.state.isvisible ? this.state.name:""}</h3>
        <button onClick={this.handletoggle}>{this.state.isvisible ? "hide" :"show"}</button>

        </>)
    }
 
}
export default Toggle 