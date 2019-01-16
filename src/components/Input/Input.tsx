import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { IFormElementProps, IStyledComponentProps } from '../../interfaces'
import FormElementWrapper from '../hocs/FormElementWrapper'
import { IconIOS, iOS } from '../Icon'
/**
 * Input Component
 * @since v1.0.0
 * @author Tracey King
 */

const Input = (props: IInputProps) => {
  return (
    <FormElementWrapper
      label={props.label}
      name={props.name}
      errorMessage={props.errorMessage}
    >
      <Wrapper css={props.css} isErrored={!!props.errorMessage}>
        {props.iconName && (
          <IconIOS name={props.iconName} size={19} color={'white'} />
        )}
        <StyledInput {...{ ...props, css: [] }} />
        {props.canClear && (
          <IconIOS
            css={clearIconStyle}
            name={'close'}
            size={25}
            color={'white'}
            onClick={props.onClear}
          />
        )}
      </Wrapper>
    </FormElementWrapper>
  )
}

/**
 * Input prop interface
 */
interface IInputProps
  extends IFormElementProps,
    React.HTMLAttributes<HTMLInputElement> {
  /** Toggle input clear option */
  canClear?: boolean
  /** Custom CSS */
  css?: FlattenSimpleInterpolation
  /** Toggle input clickability */
  disabled?: boolean
  /** Name of left icon */
  iconName?: iOS
  /** Minimum value for number input */
  min?: number
  /** Maximum value for number input */
  max?: number
  /** On Clear click */
  onClear?: () => void
  /** On Change callback */
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
  /** On Click callback */
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void
  /** Type of input field */
  type?: string
  /** Value of input field */
  value?: string
  /** is this input required */
  required?: boolean
}

interface IProps extends IStyledComponentProps {
  canClear?: boolean
  iconName?: string
}

const StyledInput = styled.input`
  background: transparent;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  height: 40px;
  outline: none;
  padding-left: ${({ iconName }: IProps) =>
    iconName && iconName.length ? '16px' : '0'};
  padding-right: ${({ canClear }: IProps) => (canClear ? '16px' : '0')};
  width: 100%;

  ::-webkit-calendar-picker-indicator {
    background: none;
    cursor: pointer;
  }
`

const Wrapper = styled.div<{
  isErrored: boolean
  css?: FlattenSimpleInterpolation
}>`
  border: 1px solid;
  border-radius: 4px;
  border-color: white;
  color: ${({ theme }: IProps) => theme.white};
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    color: ${({ theme }: IProps) => theme.white};
  }

  ${({ css }) => css};

  ${({ isErrored }) =>
    isErrored &&
    `
    border-color: red;
    input, i {
      color: red;
    }
  `};
`

const clearIconStyle = [
  `
  &:hover {
    cursor: pointer;
  }
`,
]

export default Input
