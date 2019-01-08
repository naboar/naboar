import React, { Component } from 'react'
import { Button, Expand } from '../../src'

const noop = () => null

class App extends Component {
  state = {
    expand: false,
  }
  expand = () => {
    this.setState({ expand: !this.state.expand })
  }
  render() {
    return (
      <div>
        <Expand isExpanded={this.state.expand} from={0} to={100}>
          <div style={{ height: 100, background: 'black', color: 'white' }}>
            <h1>Hello</h1>
          </div>
        </Expand>
        <Expand
          vertical={true}
          isExpanded={this.state.expand}
          from={0}
          to={100}
        >
          <div style={{ height: 100, background: 'black', color: 'white' }}>
            <h1>Hello</h1>
          </div>
        </Expand>
        <Button onClick={this.expand}>Click</Button>
      </div>
    )
  }
}

export default App
