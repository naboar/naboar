import React, { Component } from 'react'
import { Button, IconIOS, IconLogo, IconMD, Input } from '../../src'

class App extends Component {
  state = {
    notifs: [],
  }
  render() {
    return (
      <div>
        <Button onClick={alert}>Click Me</Button>
        <IconIOS name="open" size={35} />
        <IconLogo name="github" color="blue" size={35} />
        <IconMD name="close" color="red" size={35} />
        <Input  name="test" placeholder="changeme" type="number" min={34} max={50}/>
      </div>
    )
  }
}

export default App