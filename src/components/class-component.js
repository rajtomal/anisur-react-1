import { Component } from "react";



class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default ClassComponent;