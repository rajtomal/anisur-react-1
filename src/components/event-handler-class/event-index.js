import React, { Component } from 'react'

 class EventIndex extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ""
      }
    }

    changeOn = (e) => {
        this.setState({
            changeValue: e.target.value
        },() => {
            console.log(this.state.changeValue)
        })
    }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeOn} />
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
export default EventIndex;
