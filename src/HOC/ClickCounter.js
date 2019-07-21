import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {
  render () {
    const {
      count,
      incrementCount,
      name
    } = this.props

    return (
      <button onClick={incrementCount}>{name} clicked {count} times</button>
    )
  }
}

export default withCounter(ClickCounter)
