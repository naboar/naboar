import React, { Component } from 'react'
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownNode,
  IconIOS,
  IconLogo,
  IconMD,
} from '../../src'

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
        <Dropdown>
          <DropdownNode>This is the Dropdown</DropdownNode>
          <DropdownButton title={'Testing to make sure this works'} onClick={() => console.log} />
          <DropdownMenu>
            <DropdownItem>Item One</DropdownItem>
            <DropdownItem onClick={() => console.log("Item Two")}>Item Two</DropdownItem>
            <DropdownItem>Item Three</DropdownItem>
            <DropdownItem>Item Four</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default App
