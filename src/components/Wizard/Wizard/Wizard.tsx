import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import Timeline from './Components/Timeline'

/**
 * Wizard Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */

class Wizard extends Component<IProps, IState> {
  state = {
    selectedIndex: 1,
  }
  render() {
    const { selectedIndex } = this.state
    const { children } = this.props
    return (
      <Wrapper>
        <Timeline
          items={['Step 1 of 4', 'Step 2 of 4', 'Step 3 of 4', 'Step 4 of 4']}
          selectedIndex={selectedIndex}
          onClick={i => this.setState({ selectedIndex: i })}
          allowedIndex={3}
        />
        {children}
      </Wrapper>
    )
  }
}

interface IProps {
  children: ReactNode[] | ReactNode
}

interface IState {
  selectedIndex: number
}

const Wrapper = styled.div``

export default Wizard
