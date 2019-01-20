import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * FormElementError Component
 * @since v1.0.0
 * @author Tracey King
 */
const FormElementError = (props: IFormElementErrorProps) => (
  <StyledP {...props}>{props.text}</StyledP>
)

interface IFormElementErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** CSS Styling using css from styled-components */
  css?: FlattenSimpleInterpolation
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