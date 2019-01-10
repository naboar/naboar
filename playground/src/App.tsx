import React, { Component } from 'react'
import { Button, Slider } from '../../src'

/**
 * const noop = () => null
 */


class App extends Component {
  state = {
    val: 0
  }
  render() {
    return (
      <div>
        <Slider value={this.state.val} onChange={val => this.setState({ val })}/>
        <Button onClick={alert}>Click Me</Button>
      </div>
    )
  }
}

export default App
