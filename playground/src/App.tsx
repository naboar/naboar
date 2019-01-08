import React, { Component } from 'react'
import { Button } from '../../src'

const noop = () => null

class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={alert}>Click Me</Button>
      </div>
    )
  }
}

export default App
