import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

/**
 * Checkbox Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Checkbox = (props: IProps) => {
  return (
    <Wrapper disabled={props.disabled}>
      <Input {...props} onChange={e => props.onChange(!props.checked, e)} />
      <span />
    </Wrapper>
  )
}

interface IProps {
  /** whether or not the box is checked */
  checked?: boolean
  /** toggle active state of input */
  disabled?: boolean
  /** on click called with opposite of current val and event obj */
  onChange?: (newVal?: boolean, e?: ChangeEvent<HTMLInputElement>) => void
  /** Name for form validation */
  name?: string
}

const Wrapper = styled.label<{ disabled: boolean }>`
  position: relative;
  display: inline-block;
  color: rgba(255, 255, 255, .87);
  cursor: pointer;

  & > span::before {
    content: '';
    display: inline-block;
    margin-right: 15px;
    border: 1px solid rgba(255, 255, 255, .42);
    border-radius: 2px;
    width: 16px;
    height: 16px;
    vertical-align: -4px;
    transition: border-color .5s, background-color .5s;
  }

  & > input:checked + span::before {
      background-color: #3c5a53;
  }

  & > input:active + span::before {
    border-color: #1de9b6;
  }

  & > input:checked:active + span::before {
    border-color: #1de9b6;
    background-color: rgba(255, 255, 255, .26);
  }

  & > input:disabled + span::before {
    border-color: rgba(255, 255, 255, .26);
  }

  & > input:checked:disabled + span::before {
    border-color: transparent;
    background-color: rgba(255, 255, 255, .26);
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
    border-color: #1de9b6;
    width: 7px;
    height: 17px;
  }

  > input:checked {
    background-color: #1de9b6;
  }

  & :active > input {
    opacity: 1;
    tranform: scale(0);
    transition: opacity 0s, transform: 0s;
  }

  cursor: pointer;

  ${({ disabled }) => disabled && `pointer-events: none`}
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
