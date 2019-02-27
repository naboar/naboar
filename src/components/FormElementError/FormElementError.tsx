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
    position: absolute;
    right: 0;
    bottom: -20px;
    font-size: 14px;
    color: ${theme.palette.common.red};
  `}
  ${({ css }) => css}
`

export default FormElementError
