import React, { Component } from 'react'

const withCounter = WrappedComponent => {
  class WithCounter extends Component {
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

    render() {
      return <WrappedComponent
        count={this.state.count}
        incrementCount={this.incrementCount}
        {...this.props}
      />
    }
  }

  return WithCounter
}

export default withCounter
