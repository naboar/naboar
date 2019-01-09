import React from 'react'
import SyntheticEvent from 'react'
import styled from 'styled-components'
import { ITheme } from '../../theme'
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
        <IconWrapper>
          <IconIOS name={props.iconName} size={19} color={'white'} />
        </IconWrapper>
      )}
      <StyledInput {...props} />
      {props.canClear && (
        <ClearWrapper>
          <IconIOS name={'close'} size={25} color={'white'} />
        </ClearWrapper>
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
  /** HTML style object */
  style?: object
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
    iconName && iconName.length ? '48px' : '16px'};
  padding-right: ${({ canClear }: IProps) => (canClear ? '44px' : '16px')};
  width: 100%;
`

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 4px;
  position: relative;

  ${({ css }: IProps) => css && css}
`

const ClearWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`

const IconWrapper = styled.div`
  left: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

interface IProps {
  canClear?: boolean
  css?: string[]
  iconName?: string
  theme: ITheme
}

export default Input
