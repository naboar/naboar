import React from 'react'
import styled from 'styled-components'
import { IFormElementProps, IStyledComponentProps } from '../../interfaces/'
import FormElementWrapper from '../FormElementWrapper/FormElementWrapper'

/**
 * Dropdown prop interface
 */
interface IState {
  isActive?: boolean
}

interface IProps extends IFormElementProps, IStyledComponentProps {
  /** Text displayed inside of the button */
  children?: JSX.Element[] | JSX.Element | string
  /** Toggle button clickability */
  isActive?: boolean
  /** Event fired on click */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** Event fired on click outside */
  onClickOutside?: (e?: Event) => void
}

/**
 * Dropdown Component
 * @since v1.0.0
 * @author Tracey King
 */
class Dropdown extends React.Component<IProps, IState> {
  state: IState = {
    isActive: false,
  }
  private ref: any

  isActive = () => {
    const { isActive } = this.props
    const activeProp = isActive || isActive === false
    return activeProp ? isActive : this.state.isActive
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside, false)
  }

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = this.props
    const isActive = this.isActive()

    if (onClick) {
      onClick(e)
    }
    this.setState({ isActive: !isActive })
  }

  onClickOutside = (e?: Event) => {
    const { onClickOutside } = this.props
    const isActive = this.isActive()
    const target = e.target as HTMLButtonElement
    const ref = this.ref
    // if clicking inside the component, return
    if (ref && ref.contains(target)) {
      return
    }

    // if method is specified, return the method
    if (onClickOutside && isActive) {
      return onClickOutside(e)
    }

    // otherwise set the state to inactive
    if (isActive) {
      this.setState({ isActive: false })
    }
  }

  cloneWithProps(child?: React.ReactElement<any>) {
    // map the private on click from children up to this parent
    return React.cloneElement(child, {
      isActive: child.props.isActive || this.isActive(),
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        if (child.props.onClick) {
          child.props.onClick()
        }
        this.onClick(e)
      },
    })
  }

  render() {
    const { children, css, errorMessage, label, name } = this.props

    return (
      <FormElementWrapper name={name} label={label} errorMessage={errorMessage}>
        <DropdownContainer
          name={name}
          css={css}
          innerRef={(): any => null}
          ref={(ref: any) => (this.ref = ref)}
        >
          {React.Children.toArray(children).map(
            (child: React.ReactElement<any>) => this.cloneWithProps(child),
          )}
        </DropdownContainer>
      </FormElementWrapper>
    )
  }
}

const DropdownContainer = styled.button`
  display: inline-block;
  position: relative;
  background: none;
  outline: none;
  border: none;
  &:active {
    border: none;
  }
  input[type='submit'] {
    padding: 0;
  }

  ${({ css }: IStyledProps) => css && css}
`

interface IStyledProps extends IStyledComponentProps {
  innerRef: (e: any) => any
}

export default Dropdown
