import React, { Component } from 'react'
import { Button } from '../../src'

class App extends Component {
  state = {
    notifs: [],
  }
  render() {
    return (
      <div>
        <Button onClick={alert}>Click Me</Button>
      </div>
    )
  }
}

export default App
