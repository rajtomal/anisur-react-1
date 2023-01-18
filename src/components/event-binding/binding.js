import React, { Component } from 'react'

class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        binding: 0
      }
    }

    bindingFunction() {
        this.setState({
            binding : this.state.binding + 1
        })
    }
  render() {
    return (
        <div>
            
            <h1>{this.state.binding}</h1>
            <button onClick={this.bindingFunction.bind(this)}>click</button>
        </div>
    )
  }
}


export default Binding;