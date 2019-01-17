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
  variant?: 'primary' |  'secondary' | 'tertiary'
}

const StyledTextarea = styled.textarea<IStyledTextareaProps>`
  font-size: 16px;
  margin: 5px 0;
  display: block;
  background: transparent;
  color: white;
  padding: 10px 15px;
  border: 1px solid white;
  resize: none;
  width: 100%;

  ${({ css }) => css}
  ${({ errorMessage }) => errorMessage && `
    border-color: red;
  `};
`

export default Textarea
