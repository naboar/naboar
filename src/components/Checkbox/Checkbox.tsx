import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { IFormElementProps } from '../../interfaces/'
import FormElementWrapper from '../FormElementWrapper/'

/**
 * Checkbox Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Checkbox = (props: IProps) => {
  return (
    <FormElementWrapper
      name={props.name}
      label={props.label}
      errorMessage={props.errorMessage}
    >
      <Wrapper disabled={props.disabled} errorMessage={props.errorMessage}>
        <Input {...props} onChange={e => props.onChange(!props.checked, e)} />
        <span />
      </Wrapper>
    </FormElementWrapper>
  )
}

interface IProps extends IFormElementProps {
  /** whether or not the box is checked */
  checked?: boolean
  /** toggle active state of input */
  disabled?: boolean
  /** on click called with opposite of current val and event obj */
  onChange?: (newVal?: boolean, e?: ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.label<{ disabled: boolean, errorMessage?: string | boolean }>`
  ${({ disabled, errorMessage, theme  }) => `
    position: relative;
    display: inline-block;
    color: rgba(255, 255, 255, .87);
    cursor: pointer;

    & > span::before {
      content: '';
      display: inline-block;
      margin-right: 15px;
      border: 1px solid ${theme.palette.grey[600]};
      border-radius: 2px;
      width: 16px;
      height: 16px;
      vertical-align: -4px;
      transition: border-color .5s, background-color .5s;
      ${errorMessage && `
        border-color: ${theme.palette.common.red};
        background: ${theme.palette.common.red};
      `}
    }

    & > input:checked + span::before {
        background-color: ${theme.palette.primary.light};
        opacity: .26;
    }

    & > input:active + span::before {
    }

    & > input:checked:active + span::before {
      background-color: ${theme.palette.primary.light};
      opacity: .26;
    }

    & > input:disabled + span::before {
      opacity: .26;
    }

    & > input:checked:disabled + span::before {
      background-color: ${theme.palette.grey[600]};
    }

    & > input:checked:disabled + span::after {
      border-color: ${theme.palette.primary.dark};
    }

    & > span::after {
      content: '';
      display: inline-block;
      position: absolute;
      bottom: 4px;
      left: 2px;
      width: 0;
      height: 0;
      border: 3px solid transparent;
      border-left: none;
      border-top: none;
      transform: translate(5.5px, 1px) rotate(45deg);
      transition: width .1s, height .1s;
    }

    & > input:checked + span::after {
      border-color: ${theme.palette.primary.main};
      width: 7px;
      height: 17px;
    }

    > input:checked {
      background-color: ${theme.palette.primary.light};
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
  type: 'checkbox',
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

export default Checkbox
