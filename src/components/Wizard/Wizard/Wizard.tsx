import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import Controls from './Components/Controls'
import Timeline from './Components/Timeline'

/**
 * Wizard Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */

class Wizard extends Component<IProps, IState> {
  static defaultProps: IProps = {
    children: [],
  }

  state = {
    selectedIndex: 0,
  }

  get isNextActive() {
    return true
  }

  nextIndex = () => {
    const { selectedIndex } = this.state
    const { children } = this.props
    const nextIndex =
      selectedIndex < children.length - 1 ? selectedIndex + 1 : selectedIndex
    this.setState({ selectedIndex: nextIndex })

    this.props.onNext()
  }

  previousIndex = () => {
    const { selectedIndex } = this.state
    const nextIndex = selectedIndex === 0 ? selectedIndex : selectedIndex - 1
    this.setState({ selectedIndex: nextIndex })

    this.props.onPrevious()
  }

  completeWizard = () => {
    this.props.onComplete()
  }

  render() {
    const { selectedIndex } = this.state
    const {
      children,
      controls,
      nextText,
      previousText,
      completeText,
      shouldShowTimeline,
    } = this.props
    return (
      <Wrapper>
        {shouldShowTimeline && (
          <Timeline
            items={['Step 1 of 4', 'Step 2 of 4', 'Step 3 of 4', 'Step 4 of 4']}
            selectedIndex={selectedIndex}
            onClick={i => this.setState({ selectedIndex: i })}
            allowedIndex={3}
          />
        )}

        {children}
        <Controls
          isNextActive={this.isNextActive}
          selectedIndex={selectedIndex}
          steps={children.length || 0}
          nextClick={this.nextIndex}
          previousClick={this.previousIndex}
          completeClick={this.completeWizard}
          nextText={nextText}
          previousText={previousText}
          completeText={completeText}
        >
          {controls}
        </Controls>
      </Wrapper>
    )
  }
}

const noop = () => {
  return
}

Wizard.defaultProps = {
  completeText: 'Complete',
  controls: [],
  nextText: 'Next',
  onComplete: noop,
  onNext: noop,
  onPrevious: noop,
  previousText: 'Previous',
  shouldShowTimeline: true,
  validation: {},
}

interface IProps {
  children?: ReactNode[]
  controls?: ReactNode[] | ReactNode
  previousText?: string
  nextText?: string
  completeText?: string
  validation?: { [key: string]: any }
  onComplete?: () => void
  onNext?: () => void
  onPrevious?: () => void
  shouldShowTimeline?: boolean
}

interface IState {
  selectedIndex: number
}

const Wrapper = styled.div``

export default Wizard
