import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * FormElementError Component
 * @since v1.0.0
 * @author Tracey King
 */
const FormElementError = (props: IFormElementErrorProps) => (
    (typeof props.error === 'string')
      ? <StyledP {...props}>{props.error}</StyledP>
      : null
)

interface IFormElementErrorProps
  extends IStyledComponentProps,
    React.HTMLAttributes<HTMLParagraphElement> {
  /** Text for label */
  error: string | boolean
}

const StyledP = styled.p<IFormElementErrorProps>`
  ${({ theme }) => `
    font-size: 16px;
    color: ${theme.palette.common.red};
    margin: ${theme.spacing.base}px 0;
  `}
  ${({ css }) => css}
`

export default FormElementError
