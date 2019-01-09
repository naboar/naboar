import React from 'react'
import SyntheticEvent from 'react'
import styled from 'styled-components'
import { ITheme } from '../../theme'

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
          <Icon>{props.iconName}</Icon>
        </IconWrapper>
      )}
      <StyledInput {...props} />
      {props.canClear && (
        <ClearWrapper>
          <ClearIcon onClick={props.onClear}>X</ClearIcon>
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
  iconName?: string
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
  color: ${({ theme }: IProps) => theme.black};
  font-size: 18px;
  height: 40px;
  outline: none;
  padding-left: ${({ iconName }: IProps) =>
    iconName && iconName.length ? '35px' : '15px'};
  padding-right: ${({ canClear }: IProps) => (canClear ? '35px' : '15px')};
  width: 100%;
`

const Wrapper = styled.div`
  border: 1px solid;
  border-radius: 4px;
  position: relative;

  ${({ css }: IProps) => css && css}
`

const ClearIcon = styled.span`
  color: black;
  font-size: 13px;
  padding-left: 1px;
`

const ClearWrapper = styled.div`
  align-items: center;
  background: lightgrey;
  border-radius: 99em;
  display: flex;
  height: 18px;
  justify-content: center;
  padding: 1px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.span`
  font-size: 13px;
`

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 15px;
  left: 10px;
  padding: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  justify-content: center;
`

interface IProps {
  canClear?: boolean
  css?: string[]
  iconName?: string
  theme: ITheme
}

export default Input
