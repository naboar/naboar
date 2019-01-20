import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { IFormElementProps } from '../../interfaces/IFormElementProps'
import FormElementError from '../FormElementError/FormElementError'
import Label from '../Label/Label'

const FormElementWrapper = (props: IFormElementWrapperProps) => (
  <Wrapper css={props.css}>
    {props.label && <Label text={props.label} htmlFor={props.name} />}
    {props.children}
    {props.errorMessage && <FormElementError text={props.errorMessage} />}
  </Wrapper>
)

interface IFormElementWrapperProps extends IFormElementProps {
  css?: FlattenSimpleInterpolation
  children?: React.ReactNode
}

const Wrapper = styled.div<{ css?: FlattenSimpleInterpolation }>`
  ${({ css }) => css && css}
`

export default FormElementWrapper
