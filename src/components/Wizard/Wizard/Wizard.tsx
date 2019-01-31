import React, { Component, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'
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
    completeText: 'Complete',
    controls: [],
    nextText: 'Next',
    onComplete: null,
    onNext: null,
    onPrevious: null,
    previousText: 'Previous',
    shouldShowTimeline: true,
    validation: {},
  }

  state = {
    nextActive: false,
    selectedIndex: 0,
    selectedName: '',
  }

  /**
   * Set initial name to first pane
   */
  componentWillMount() {
    this.setState({
      selectedName: this.props.children
        ? this.props.children[0].props.name
        : '',
    })
  }

  /**
   * Run validators on selected index
   */
  componentDidMount() {
    const { selectedName } = this.state
    const validation = this.props.validation[selectedName]
    this.validateSteps(validation)
  }

  /**
   * Check if validation has changed,
   * if so revalidate
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps: IProps, prevState: IState) {
    const { selectedName } = prevState
    const validation = prevProps.validation[selectedName]
    const nextValidation = this.props.validation[this.state.selectedName]

    if (validation !== nextValidation) {
      this.validateSteps(nextValidation)
    }
  }

  /**
   * Make sure all are truthy
   * @param validation - Array of bools
   */
  validateSteps = (validation: boolean[] = []) =>
    this.setState({ nextActive: validation.every(item => item) })

  get isNextActive() {
    return this.state.nextActive
  }

  /**
   * Calls curried callback after setting newly selected index & selectedName
   */
  getPreviousOrNextIndex = (
    cb: () => void = () => undefined,
    nextIndex: number,
  ) => () => {
    const nextName = this.props.children[nextIndex].props.name
    this.setState({ selectedIndex: nextIndex, selectedName: nextName })

    cb()
  }

  /**
   * call onComplete() prop
   */
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
      onPrevious,
      onNext,
    } = this.props

    const items = children.map(
      (child: ReactElement<IStepProps>) =>
        child.props.timelineTitle || child.props.title,
    )

    const previousIndex =
      selectedIndex === 0 ? selectedIndex : selectedIndex - 1

    const nextIndex =
      selectedIndex < children.length - 1 ? selectedIndex + 1 : selectedIndex

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
          nextClick={this.getPreviousOrNextIndex(onNext, nextIndex)}
          previousClick={this.getPreviousOrNextIndex(onPrevious, previousIndex)}
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

interface IProps extends IStyledComponentProps {
  /** Children of type ```<WizardStep />``` */
  children?: Array<ReactElement<IStepProps>>
  /** Content displayed in bottom left of wizard */
  controls?: ReactNode[] | ReactNode
  /**  Text in previous button */
  previousText?: string
  /**  Text in next button */
  nextText?: string
  /**  Text in complete button */
  completeText?: string
  /** objects keyed with the names of steps, array of boolean vals */
  validation?: { [key: string]: boolean[] }
  /** function called when wizard is completed */
  onComplete?: () => void
  /** function called when index increases */
  onNext?: () => void
  /** function called when index decreases */
  onPrevious?: () => void
  /** should the timeline be displayed */
  shouldShowTimeline?: boolean
}

interface IState {
  selectedIndex: number
  selectedName: string
  nextActive: boolean
}

const Wrapper = styled.div<IStyledComponentProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ css }) => css && css};
`

export default Wizard
