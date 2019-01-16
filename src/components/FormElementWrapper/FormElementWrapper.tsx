import React, { Fragment } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { FormElementError, Label } from '../..'
import { IFormElementProps } from '../../interfaces/IFormElementProps'

const FormElementWrapper = (props: IFormElementWrapperProps) => (
  <Wrapper css={props.css}>
    <Label title={props.label} htmlFor={props.name} />
    {props.children}
    <FormElementError text={props.errorMessage} />
  </Wrapper>
)

interface IFormElementWrapperProps extends IFormElementProps {
  css?: FlattenSimpleInterpolation
  children?: React.ReactNode
}

const Wrapper = styled.div<{ css?: FlattenSimpleInterpolation }>`
  ${({ css }) => css}
`

export default FormElementWrapper
