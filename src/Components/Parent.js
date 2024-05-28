import React, { Component } from 'react'
import Child from './Child'
import { Link } from 'react-router-dom';

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>I am Parent component</h1>
        <Child Learner="John" place="Mumbai"></Child>
        <Child Learner="Jack" place="Pune"></Child>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default Parent;