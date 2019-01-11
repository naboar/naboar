import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../../theme'

/**
 * Button Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

/**
 * Button prop interface
 */
interface IButtonProps {
  /** CSS styling using styled-components css */
  css?: FlattenSimpleInterpolation
  /**
   * Event fired on click
   */
  onClick: () => void
  /**
   * Text displayed inside of the button
   */
  children: JSX.Element | string
  /**
   * Toggle button clickability
   */
  disabled?: boolean
}

const StyledButton = styled.button`
  background-color: ${({ theme }: IProps) => theme.black};
  color: ${({ theme }: IProps) => theme.white};

  ${({ css }: IProps) => css && css}
`

interface IProps {
  /** CSS styling using styled-components css */
  css?: FlattenSimpleInterpolation
  /** Theme */
  theme: ITheme
}

export default Button
