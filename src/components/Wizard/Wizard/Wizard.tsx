import React, { Component, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { IStepProps } from '../WizardStep/WizardStep'
import Controls from './Components/Controls'
import Inner from './Components/Inner'
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
    nextActive: false,
    selectedIndex: 0,
    selectedName: '',
  }

  componentWillMount() {
    this.setState({
      selectedName: this.props.children
        ? this.props.children[0].props.name
        : '',
    })
  }

  componentDidMount() {
    const { selectedName } = this.state
    const validation = this.props.validation[selectedName]
    this.validateSteps(validation)
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    const { selectedName } = prevState
    const validation = prevProps.validation[selectedName]
    const nextValidation = this.props.validation[this.state.selectedName]

    if (validation !== nextValidation) {
      this.validateSteps(nextValidation)
    }
  }

  validateSteps = (validation: [] = []) => {
    this.setState({ nextActive: validation.every(item => item) })
  }

  get isNextActive() {
    return this.state.nextActive
  }

  nextIndex = () => {
    const { selectedIndex } = this.state
    const { children } = this.props
    const nextIndex =
      selectedIndex < children.length - 1 ? selectedIndex + 1 : selectedIndex
    const nextName = this.props.children[nextIndex].props.name
    this.setState({ selectedIndex: nextIndex, selectedName: nextName })

    this.props.onNext()
  }

  previousIndex = () => {
    const { selectedIndex } = this.state
    const nextIndex = selectedIndex === 0 ? selectedIndex : selectedIndex - 1
    const nextName = this.props.children[nextIndex].props.name
    this.setState({ selectedIndex: nextIndex, selectedName: nextName })

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
      css,
    } = this.props

    const items = children.map(
      (child: ReactElement<IStepProps>) =>
        child.props.timelineTitle || child.props.title,
    )

    return (
      <Wrapper css={css}>
        {shouldShowTimeline && (
          <Timeline
            items={items}
            selectedIndex={selectedIndex}
            onClick={i => this.setState({ selectedIndex: i })}
            isNextActive={this.isNextActive}
          />
        )}
        <Inner>
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child, {
              isActive: i === selectedIndex,
              isPrev: i < selectedIndex,
            }),
          )}
        </Inner>
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
  children?: Array<ReactElement<IStepProps>>
  controls?: ReactNode[] | ReactNode
  previousText?: string
  nextText?: string
  completeText?: string
  validation?: { [key: string]: any }
  onComplete?: () => void
  onNext?: () => void
  onPrevious?: () => void
  shouldShowTimeline?: boolean
  css?: string[]
}

interface IState {
  selectedIndex: number
  selectedName: string
  nextActive: boolean
}

const Wrapper = styled.div<{ css?: string[] }>`
  display: flex;
  flex-direction: column;
  background-color: #333;
  width: 100%;
  height: 400px;
  ${({ css }) => css && css};
`

export default Wizard
