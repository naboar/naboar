import React from 'react'
import SyntheticEvent from 'react'
import styled from 'styled-components'
import { ITheme, theme } from '../../theme'
import { IconIOS, iOS } from '../Icon'

/**
 * Input Component
 * @since v1.0.0
 * @author Tracey King
 */
const Input = (props: IInputProps) => {
  return (
    <Wrapper css={props.css}>
      {props.iconName && (
        <IconIOS name={props.iconName} size={19} color={theme.white} />
      )}
      <StyledInput {...props} />
      {props.canClear && (
        <IconIOS name={'close'} size={25} color={theme.white} />
      )}
    </Wrapper>
  )
}

/**
 * Input prop interface
 */
interface IInputProps {
  /** Toggle input clear option */
  canClear?: boolean
  /** Custom CSS */
  css?: string[]
  /** Default Value of input field */
  defaultValue?: string
  /** Toggle input clickability */
  disabled?: boolean
  /** Name of left icon */
  iconName?: iOS
  /** Minimum value for number input */
  min?: number
  /** Maximum value for number input */
  max?: number
  /** Name of input field */
  name: string
  /** On Clear click */
  onClear?: () => void
  /** On Change callback */
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
  /** On Blur callback */
  onBlur?: (value: React.ChangeEvent<HTMLInputElement>) => void
  /** On Focus callback */
  onFocus?: (value: React.ChangeEvent<HTMLInputElement>) => void
  /** On Click callback */
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void
  /** Placeholder text */
  placeholder?: string
  /**
   * A stepping interval to use when
   * using up and down arrows to adjust the value,
   * as well as for validation
   * */
  step?: number
  /** HTML style object */
  style?: object
  /** Type of input field */
  type?: string
  /** Value of input field */
  value?: string
}

const StyledInput = styled.input`
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: ${({ theme }: IProps) => theme.white};
  font-size: 16px;
  height: 40px;
  outline: none;
  padding-left: ${({ iconName }: IProps) =>
    iconName && iconName.length ? '16px' : '0'};
  padding-right: ${({ canClear }: IProps) => (canClear ? '16px' : '0')};
  width: 100%;
`

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 4px;
  border-color: ${theme.white};
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ css }: IProps) => css && css}
`

interface IProps {
  canClear?: boolean
  css?: string[]
  iconName?: string
  theme: ITheme
}

export default Input
