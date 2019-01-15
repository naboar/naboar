import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * Select Component
 * @since v1.0.0
 * @author Tracey King
 */
const Select = (props: ISelectProps) => (
  <StyledSelect {...props}>{props.children}</StyledSelect>
)

const StyledSelect = styled.select`
  background: transparent;
  color: white;
  height: 40px;
  width: 100%;
  border: 1px solid white;
  text-indent: 10px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }

  ${({ css }: ISelectProps) => css }
`

/**
 * Select prop interface
 */
interface ISelectProps {
  /** Children must be HTMLOptionElement */
  children?: Array<React.ReactElement<HTMLOptionElement>> | React.ReactElement<HTMLOptionElement>
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Fired click event */
  onClick?: () => void
}

export default Select