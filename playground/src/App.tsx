import React, { Component } from 'react'
import { Button, Input } from '../../src'
import { css } from 'styled-components'

const noop = () => null

class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={alert}>Click Me</Button>
        <div style={{width: 800}}>
        <Input
          name="tets" 
          canClear
          onClick={() => console.log()}
          onBlur={(e) => console.log(e.target.value)} 
          onFocus={(e) => console.log(e.target.value)} 
          onChange={(e) => console.log(e.target.value)} />
        </div>
        
      </div>
    )
  }
}

export default App