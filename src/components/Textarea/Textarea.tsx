import React from 'react'
import styled from 'styled-components'
import { IFormElementProps, IStyledComponentProps } from '../../interfaces/'
import FormElementWrapper from '../FormElementWrapper/FormElementWrapper'

/**
 * Textarea Component
 * @since v1.0.0
 * @author Tracey King
 */
const Textarea = (props: IStyledTextareaProps) => (
  <FormElementWrapper
    label={props.label}
    name={props.name}
    errorMessage={props.errorMessage}
  >
    <StyledTextarea {...props}>{props.title}</StyledTextarea>
  </FormElementWrapper>
)

interface IStyledTextareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement>,
    IFormElementProps,
    IStyledComponentProps {
  /** Fired onChange event */
  onChange?: (e?: React.ChangeEvent<HTMLTextAreaElement>) => void
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const StyledTextarea = styled.textarea<IStyledTextareaProps>`
  ${({ css, errorMessage, theme }) => `
    font-size: 16px;
    margin: 5px 0;
    display: block;
    background: ${theme.palette.secondary.light};
    color: ${theme.palette.common.white};
    padding: ${theme.spacing.base}px ${theme.spacing.base * 2}px;
    resize: none;
    width: 100%;
    border: none;
    border-radius: ${theme.shape.borderRadius};

    ${css ? css : ''};
    ${errorMessage ? `background: ${theme.palette.common.red};` : ''};
  `}
`

export default Textarea
