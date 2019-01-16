import React from 'react'
import { FormElementError, Label } from '../../'
import { IFormElementProps } from '../../interfaces/IFormElementProps'

const FormElementWrapper = (props: IFormElementWrapperProps)  => (
  <div>
    <Label title={props.label} htmlFor={props.name} />
    {props.children}
    <FormElementError text={props.errorMessage} />
  </div>
)

interface IFormElementWrapperProps extends IFormElementProps {
  children?: React.ReactNode
}

export default FormElementWrapper