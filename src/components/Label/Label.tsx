import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * Label Component
 * @since v1.0.0
 * @author Tracey King
 */
const Label = (props: IStyledLabelProps) => (
  <StyledLabel {...props}>{props.text}</StyledLabel>
)

interface IStyledLabelProps
  extends IStyledComponentProps,
    React.HTMLAttributes<HTMLLabelElement> {
  /** For attribute for input targeting */
  htmlFor: string
  /** Text for label */
  text: string
}

const StyledLabel = styled.label<IStyledLabelProps>`
  ${({ css, theme }) => `
    font-size: 16px;
    color: ${theme.palette.common.white};
    margin: ${theme.spacing.base}px 0;
    display: block;

    ${css ? css : ''}
  `}
`

export default Label
