import React from 'react'
import styled from 'styled-components'
import { IFormElementProps } from '../../interfaces/IFormElementProps'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import FormElementError from '../FormElementError/FormElementError'
import Label from '../Label/Label'

const FormElementWrapper = (props: IFormElementWrapperProps) => (
  <Wrapper css={props.css} className={'formElement'}>
    {props.label && <Label text={props.label} htmlFor={props.name} />}
    {props.children}
    {props.errorMessage && <FormElementError error={props.errorMessage} />}
  </Wrapper>
)

interface IFormElementWrapperProps
  extends IFormElementProps,
    IStyledComponentProps {
  children?: React.ReactNode
}

const Wrapper = styled.div<IStyledComponentProps>`
  ${({ css, theme }) => `
  position: relative;
  margin-bottom: ${theme.spacing.base}px;
  ${css && css}
  `}
`

export default FormElementWrapper
