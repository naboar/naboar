import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { IFormElementProps, IStyledComponentProps } from '../../interfaces'
import FormElementWrapper from '../FormElementWrapper/'
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
      <Wrapper css={props.css} isErrored={!!props.errorMessage} disabled={props.disabled}>
        {props.iconName && (
          <IconIOS.White name={props.iconName} size={19} />
        )}
        <StyledInput {...{ ...props, css: [] }} />
        {props.canClear && (
          <IconIOS.White
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
    IStyledComponentProps,
    React.HTMLAttributes<HTMLInputElement> {
  /** Toggle input clear option */
  canClear?: boolean
  /** Toggle input clickability */
  disabled?: boolean
  /** Name of left icon */
  iconName?: iOS
  /** Target datalist with same id */
  list?: string
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
  ${({ canClear, iconName, theme }: IProps) => `
    background: transparent;
    border: none;
    box-sizing: border-box;
    font-size: 16px;
    height: 40px;
    outline: none;
    padding-left: ${
      iconName && iconName.length ? `${theme.spacing.base * 2}px` : '0'
    };
    padding-right: ${canClear ? `${theme.spacing.base * 2}px` : '0'};
    width: 100%;

    ::-webkit-calendar-picker-indicator {
      background: none;
      cursor: pointer;
    }
  `}
`

const Wrapper = styled.div<{
  isErrored: boolean
  css?: FlattenSimpleInterpolation
  disabled: boolean
}>`
  ${({ css, disabled, isErrored, theme }) => `
    background: ${theme.palette.secondary.light};
    border-radius: ${theme.shape.borderRadius};
    color: ${theme.palette.common.white};
    padding: 0 ${theme.spacing.base * 2}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      color: ${theme.palette.common.white};
    }
    input::placeholder {
      color: ${theme.palette.common.white};
      opacity: .4;
    }
    ${disabled && `
      opacity: .6;
    `}

    ${css};

    ${isErrored && `
        background: ${theme.palette.common.red};
      `};
    ${css}
  `}
`

const clearIconStyle = [
  `
  &:hover {
    cursor: pointer;
  }
`,
]

export default Input
