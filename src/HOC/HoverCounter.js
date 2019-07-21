import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCounter extends Component {
  render () {
    const {
      count,
      incrementCount,
      name
    } = this.props

    return (
      <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
    )
  }
}

export default withCounter(HoverCounter)
