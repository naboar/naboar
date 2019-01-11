import React, { Component } from 'react'
import { css } from 'styled-components'
import { Button, IconIOS, IconLogo, IconMD, Input } from '../../src'

class App extends Component {
  state = {
    notifs: [],
    text: 'Clear Me',
  }

  clearText = () => this.setState({ text: '' })
  updateText = text => this.setState({ text })

  render() {
    return (
      <div>
        <Button onClick={alert}>Click Me</Button>
        <IconIOS name="open" size={35} />
        <IconLogo name="github" color="blue" size={35} />
        <IconMD name="close" color="red" size={35} />
        <Input
          css={inputStyles}
          name="test"
          type="number"
          min={34}
          max={50}
        />
        <Input
          css={inputStyles}
          name="clearTest"
          value={this.state.text}
          canClear={!!this.state.text}
          onClear={this.clearText}
          onChange={(e) => this.updateText(e.target.value)}
        />
        <Input
          disabled={true}
          css={inputStyles}
          name="disabledTest"
          value={"Can't touch this"}
        />
      </div>
    )
  }
}

const inputStyles = css`
  color: black;
  border: 1px solid;
  width: 300px;
  i {
    color: black;
  }
`

export default App
