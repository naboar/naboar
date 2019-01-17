import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * Button Component
 * @since v1.0.0 
 * @author [Jonathan Currie](https://github.com/jbcurrie)
 */

const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.defaultProps = {
  type: 'submit',
}

const StyledButton = styled.button<IButtonProps>`
  flex-grow: 0;
  padding: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.2s;
  border-radius: 2px;
  &:active{box-shadow: none};
  &:disabled{
    opacity: 0.5;
    cursor: default;
  }
  ${({ css }) => css && css}
`

type ButtonTypes = 'button' | 'reset' | 'submit'

interface IButtonProps {
  /** component children */
  children: JSX.Element | string
  /** onClick callback */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Name for javascript reference or form-data */
  name: string
  /** 
   * specify button type
   */
  type?: ButtonTypes
  /**
   * value attribute
   */
  value?: string
  /**
   * disabled attribute
   */
  disabled?: boolean
  /** CSS styling using styled-components css */
  css?: FlattenSimpleInterpolation
}


export default Button