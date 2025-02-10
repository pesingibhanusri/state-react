import { Component } from "react";

class ADDITEMS extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            items: []
        };
    }

    handleinput = (event) => {
        this.setState({ text: event.target.value });
    }

    handleadd = () => {
        if (this.state.text) {
            this.setState(prevState => ({
                items: [...prevState.items, prevState.text],
                // text: "" // clear the input after adding
            }));
        }
    }

    render() {
        console.log(this.state);

        return (
            <>
                <input 
                    placeholder="add items" 
                    onChange={this.handleinput} 
                    // value={this.state.text} // binding the input value
                />
                <button onClick={this.handleadd}>Add</button>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ADDITEMS;
// import { Component } from "react";

// class ADDITEMS extends Component{
//     constructor(){
//         super()
//         this.state={
//             text:"",
//             items:[]
//         }

//     }
//     handleinput=(e)=>{
//         this.setState({text:e.target.value})
//     }
//     handleadd=()=>{
//         this.setState({items:[...this.state.text,this.state.text]})

//     }

//     render(){
//         console.log(this.state)
    
            

        
//         return(
//             <>
//             <input type="text" placeholder="add ietms" onChange={this.handleinput}></input>
//             <button onClick={this.handleadd}>Add</button>
//             <ul>
//                {this.state.items.map((item,index)=>{
// <>
// <li key={index}>{item}</li>
// </>
//                })}
//             </ul>
//             </>
//         )
//     }

// }export default ADDITEMS

