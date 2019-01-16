import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * Label Component
 * @since v1.0.0
 * @author Tracey King
 */
const Label = (props: IStyledLabelProps) => (
  <StyledLabel {...props}>{props.title}</StyledLabel>
)

interface IStyledLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** For attribute for input targeting */
  htmlFor: string
  /** CSS Styling using css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Text for label */
  title: string
}

const StyledLabel = styled.label<IStyledLabelProps>`
  font-size: 16px;
  color: white;
  margin: 5px 0;
  display: block;

  ${({ css }) => css}
`

export default Label