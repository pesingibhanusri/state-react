import { Component } from "react"

class Typed extends Component{
    constructor(){
        super()
        this.state={
            showtext:"sree"
        }
    }

    handlechangetext=(event)=>{
        // console.log(event.target.value)
        this.setState({showtext:event.target.value})

    }

    render(){
        return(
        <>
        <h1>Typedvalue:{this.state.showtext}</h1>
        <input type="text" placeholder="typesomething" onChange={this.handlechangetext}></input>
        <br></br>   <br></br></>
        )
     
    }


}
export default Typed