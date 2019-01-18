import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

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
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 16px;
  transition: all 0.2s;
  &:active{box-shadow: none};
  ${({ theme }) => `
    padding: ${theme.spacing.base}px;
    border-radius: ${theme.shape.borderRadius};
    box-shadow: ${theme.shadows[1]};
    &:disabled{
      opacity: 0.5;
      cursor: default;
    }
  `}
  ${({ css }) => css && css}
`

type ButtonTypes = 'button' | 'reset' | 'submit'

interface IButtonProps extends IStyledComponentProps {
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
}

const MainButton = styled(StyledButton)`
  ${({ theme }) => `
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
  `}
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
`
const DangerButton = styled(StyledButton)`
  ${({ theme }) => `
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
  `}
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
`
Button.Main = MainButton
Button.MainInverse = MainInverse
Button.Secondary = SecondaryButton
Button.Danger = DangerButton


export default Button