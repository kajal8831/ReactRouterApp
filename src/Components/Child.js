import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        <p>Hello {this.props.Learner} from {this.props.place}, Welcome to my blogs</p>      
      </div>
    )
  }
}

export default Child