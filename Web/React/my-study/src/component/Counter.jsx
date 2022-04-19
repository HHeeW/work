import React, { Component } from 'react'

export default class Counter extends Component {

    handleDecrease = () =>{
        this.setState({
            number: this.state.number -1
        })
    }
  render() {
    return (
      <div>
          <h1>카운터</h1>
          <div>값 : {this.state.number}</div>
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}
