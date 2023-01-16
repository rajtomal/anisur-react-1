import { Component } from "react";


class State extends Component{

    constructor(props){
        super(props)
        this.state = {
             count : 0
        }
    }

    counterUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    counterDawn = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <h1><strong style={{color: "red"}}>State</strong> for Class function</h1>
                <h3>Count: {this.state.count}</h3>
                <button className="counter-btn" onClick={this.counterUp}>+</button>
                <button className="counter-btn" onClick={this.counterDawn}>-</button>
            </div>
        )
    }
}

export default State;