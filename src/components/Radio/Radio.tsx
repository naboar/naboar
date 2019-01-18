import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { IFormElementProps } from '../../interfaces/'
import FormElementWrapper from '../FormElementWrapper/FormElementWrapper'

/**
 * Radio Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Radio = (props: IProps) => {
  return (
    <FormElementWrapper
      name={props.name}
      label={props.label}
      errorMessage={props.errorMessage}
    >
      <Wrapper disabled={props.disabled}>
        <Input {...props} onClick={e => props.onClick(props.value)} />
        <span />
      </Wrapper>
    </FormElementWrapper>
  )
}

interface IProps extends IFormElementProps {
  /** value */
  value: string | number
  /** whether or not the box is checked */
  checked?: boolean
  /** toggle active state of input */
  disabled?: boolean
  /** on click called with value */
  onClick?: (value?: string | number, e?: ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.label<{ disabled: boolean }>`
  ${({ disabled, theme }) => `
    position: relative;
    display: inline-block;
    color: ${theme.palette.common.white};
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    & > span::before {
      content: '';
      display: inline-block;
      margin-right: 15px;
      border: 2px solid rgba(255, 255, 255, .42);
      border-radius: 100%;
      width: 16px;
      height: 16px;
      vertical-align: -4px;
      transition: border-color .5s, background-color .5s;
    }

    & > input:checked + span::before {
        border-color: ${theme.palette.primary.main};
    }

    & > input:active + span::before {
      border-color: ${theme.palette.primary.main};
    }

    & > input:disabled + span::before {
      opacity: .4;
    }

    & > input:checked:disabled + span::before {
      opacity: .8;
      border-color: ${theme.palette.primary.main};
    }

    & > span::after {
      transition: background-color .1s, opacity .1s;
      content: '';
      display: inline-block;
      position: absolute;
      top: 5px;
      left: 3px;
      width: 10px;
      height: 10px;
      border: 2px solid rgba(0,0,0,.7);
      opacity: 0;
      border-radius: 100%;
    }

    & > input:checked + span::after {
      opacity: 1;
      background: ${theme.palette.primary.main};
      cursor: default;
    }

    & > input:disabled + span::after {
      opacit: .8;
      background: ${theme.palette.primary.main};
    }

    & :active > input {
      opacity: 1;
      tranform: scale(0);
      transition: opacity 0s, transform: 0s;
    }

    cursor: pointer;

    ${disabled && `pointer-events: none`}
  `}
`

const Input = styled.input.attrs({
  type: 'radio',
})`
  appearance: none;
  position: absolute;
  z-index: -1;
  left: -15px;
  top: -15px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.42);
  outline: none;
  opacity: 0;
  transform: scale(1);
  transition: opacity 0.5s, transform 0.5s;
  :disabled {
    pointer-events: none;
  }
`

export default Radio
