import React, { Component } from 'react'

class HoverCounter extends Component {
  render () {
    const {
      count,
      incrementCount,
      name
    } = this.props

    return (
      <h2 onMouseOver={incrementCount}>{name} hovered {count} times</h2>
    )
  }
}

export default HoverCounter
