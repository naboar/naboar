import React, { Component } from 'react'
import { css } from 'styled-components'
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
  Input,
  NavBar,
  NavBarLink,
  NavDrawer,
  NavDrawerDivider,
  NavDrawerLink,
} from '../../src'

class App extends Component {
  state = {
    activeIndex: 0,
    notifs: [],
    text: 'Clear Me',
  }

  clearText = () => this.setState({ text: '' })
  updateText = text => this.setState({ text })
  updateActiveIndex = activeIndex => this.setState({ activeIndex })

  render() {
    return (
      <div>
        <NavBar onClick={() => alert('redirect')} title={'Dashboard'}>
          <NavBarLink
            title={'First Item'}
            isActive={this.state.activeIndex === 0}
            onClick={() => this.updateActiveIndex(0)}
          />
          <NavBarLink
            title={'Second Item'}
            isActive={this.state.activeIndex === 1}
            onClick={() => this.updateActiveIndex(1)}
          />
          <NavBarLink
            title={'Third Item'}
            isActive={this.state.activeIndex === 2}
            onClick={() => this.updateActiveIndex(2)}
          />
        </NavBar>
        <Button onClick={alert}>Click Me</Button>
        <IconIOS name="open" size={35} />
        <IconLogo name="github" color="blue" size={35} />
        <IconMD name="close" color="red" size={35} />
        <Input css={inputStyles} name="test" type="number" min={34} max={50} />
        <Dropdown>
          <DropdownNode>This is the Dropdown</DropdownNode>
          <DropdownButton
            title={'Testing to make sure this works'}
            onClick={() => alert('DropdownButton')}
          />
          <DropdownMenu>
            <DropdownItem>Item One</DropdownItem>
            <DropdownItem onClick={() => alert('Item Two')}>
              Item Two
            </DropdownItem>
            <DropdownItem>Item Three</DropdownItem>
            <DropdownItem>Item Four</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Input css={inputStyles} name="test" type="number" min={34} max={50} />
        <Input
          css={inputStyles}
          name="clearTest"
          value={this.state.text}
          canClear={!!this.state.text}
          onClear={this.clearText}
          onChange={e => this.updateText(e.target.value)}
        />
        <Input
          disabled={true}
          css={inputStyles}
          name="disabledTest"
          value={"Can't touch this"}
        />
        <NavDrawer from={45} to={350} title={'Application'}>
          <NavDrawerLink
            css={linkStyles}
            title={'First Item'}
            iconName={'trending-up'}
            isActive={this.state.activeIndex === 0}
            onClick={() => this.updateActiveIndex(0)}
          />
          <NavDrawerLink
            css={linkStyles}
            title={'Second Item'}
            iconName={'trending-up'}
            isActive={this.state.activeIndex === 1}
            onClick={() => this.updateActiveIndex(1)}
          />
          <NavDrawerDivider css={dividerStyles} />
          <NavDrawerLink
            css={linkStyles}
            title={'Group 2 - First Item'}
            iconName={'trending-up'}
            isActive={this.state.activeIndex === 2}
            onClick={() => this.updateActiveIndex(2)}
          />
          <NavDrawerLink
            css={linkStyles}
            title={'Group 2 - Second Item'}
            iconName={'trending-up'}
            isActive={this.state.activeIndex === 3}
            onClick={() => this.updateActiveIndex(3)}
          />
        </NavDrawer>
      </div>
    )
  }
}

const inputStyles = css`
  color: black;
  border: 1px solid;
  width: 300px;
  i,
  input {
    color: black;
  }
  input {
    &:disabled {
      color: grey;
    }
  }
`

const dividerStyles = css`
  margin-top: 30px;
  width: 90%;
`

const linkStyles = css`
  padding: 10px;
  &:hover {
    background: #11a07c;
    cursor: pointer;
  }
`

export default App
