import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * FormElementError Component
 * @since v1.0.0
 * @author Tracey King
 */
const FormElementError = (props: IFormElementErrorProps) => (
  <StyledP {...props}>{props.text}</StyledP>
)

interface IFormElementErrorProps
  extends IStyledComponentProps,
    React.HTMLAttributes<HTMLParagraphElement> {
  /** Text for label */
  text: string
}

const StyledP = styled.p<IFormElementErrorProps>`
  ${({ css, theme }) => `
    font-size: 16px;
    color: ${theme.palette.common.red};
    margin: ${theme.spacing.base}px 0;

    ${css ? css : ''}
  `}
`

export default FormElementError
