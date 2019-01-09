import React, { Component } from 'react'
import { Button, Notifications } from '../../src'

class App extends Component {
  state = {
    notifs: [],
  }
  addNotif = () => {
    this.setState({
      notifs: [
        ...this.state.notifs,
        { title: 'Hello', body: 'Testing some stuff' },
      ],
    })
  }
  render() {
    return (
      <div>
        <Notifications notifications={this.state.notifs} />
        <Button onClick={this.addNotif}>Click Me</Button>
      </div>
    )
  }
}

export default App
