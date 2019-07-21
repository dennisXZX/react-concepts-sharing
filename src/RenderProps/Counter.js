import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    const { incrementStep } = this.props

    this.setState(prevState => {
      return {
        count: prevState.count + incrementStep
      }
    })
  }

  render () {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter
