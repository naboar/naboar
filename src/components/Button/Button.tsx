import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * Button Component
 * @since v1.0.0
 * @author [Jonathan Currie](https://github.com/jbcurrie)
 */

const Button = (props: IButtonProps) => {
  // const onButtonClick: IButtonProps['onClick'] = (e: React.MouseEvent<HTMLButtonElement>) => {
  // const { log } = console
  // log('hello')
  // const { _buttonGroupIndex, value, _buttonGroupClick } = props
  // if (_buttonGroupClick) {
  //   _buttonGroupClick(value, _buttonGroupIndex, e)
  // }
  // if (props.onClick) {
  //   props.onClick(e)
  // }
  // }
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.defaultProps = {
  type: 'submit',
}

const StyledButton = styled.button<IButtonProps>`
  flex-grow: 0;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 16px;
  transition: all 0.2s;
  &:active {
    box-shadow: none;
  }
  ${({ theme, css }) => `
    padding: ${theme.spacing.base}px;
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadows[1]};
    &:disabled{
      opacity: 0.5;
      cursor: default;
    }
    ${css ? css : ''}
  `}
`

type ButtonTypes = 'button' | 'reset' | 'submit'

export interface IButtonProps
  extends IStyledComponentProps,
    React.HTMLAttributes<HTMLButtonElement> {
  /** component children */
  children: React.ReactNode
  /** active if Button value matches ButtonGroup activeValue */
  isActive?: boolean
  /** onClick callback */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Name for javascript reference or form-data */
  name?: string
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
  /** onClick callback passed to ButtonGroup */
  // _buttonGroupClick?: (value: string, index: number, e: React.MouseEvent<HTMLButtonElement>) => void
  /** Button index value passed to ButtonGroup */
  // _buttonGroupIndex?: number
}

const MainButton = styled(StyledButton)`
  ${({ theme, isActive }) => `
    background: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    &:hover {
      background: ${theme.palette.primary.dark};
    }
    &:disabled{
      background: ${theme.palette.primary.dark};
      &:hover {
        background: ${theme.palette.primary.dark};
      }
    }
    ${isActive && `background:${theme.palette.primary.dark}; `}
  `}
  ${({ css }) => css && css}
`
const SecondaryButton = styled(StyledButton)`
  ${({ theme }) => `
    background: transparent;
    border: 1px solid ${theme.palette.common.white};
    color: ${theme.palette.common.white};
    &:hover {

    }
    &:disabled{
      opacity: .6;
      &:hover {
      }
    }
  `}
  ${({ css }) => css && css}
`
const DangerButton = styled(StyledButton)`
  ${({ theme, isActive }) => `
    background: ${theme.palette.common.red};
    color: ${theme.palette.common.white};
    &:hover {
      background: ${theme.palette.common.red};
    }
    &:disabled{
      background: ${theme.palette.common.red};
      opacity: .6;
      &:hover {
        background: ${theme.palette.common.red};
        opacity: .6;
      }
    }
    ${isActive && `background:${theme.palette.common.red}; `}
  `}
  ${({ css }) => css && css}
`

const MainInverse = styled(StyledButton)`
  ${({ theme }) => `
    background: ${theme.palette.grey[600]};
    color: ${theme.palette.primary.light};
    &:hover {
      opacity: .8;
    }
    &:disabled{
      opacity: .8;
      &:hover {
        opacity: .8
      }
    }
  `}
  ${({ css }) => css && css}
`
Button.Main = MainButton
Button.MainInverse = MainInverse
Button.Secondary = SecondaryButton
Button.Danger = DangerButton

export default Button
