import React, { Component } from 'react'
import { Button, Slider, IconIOS, IconLogo, IconMD } from '../../src'

class App extends Component {
  state = {
    val: 0
  }
  render() {
    return (
      <div>
        <Slider value={this.state.val} onChange={val => this.setState({ val })}/>
        <Button onClick={alert}>Click Me</Button>
        <IconIOS name='open' size={35} />
        <IconLogo name="github" color="blue" size={35} />
        <IconMD name="close" color="red" size={35} />
      </div>
    )
  }
}

export default App
