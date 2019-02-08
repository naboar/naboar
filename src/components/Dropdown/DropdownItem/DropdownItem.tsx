import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'

interface IDropdownItemProps extends IStyledComponentProps {
  /** Children */
  children?: React.ReactNode
  /** Fired click event */
  onClick?: () => void
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Value of item */
  value?: string | number
}

/**
 * DropdownItem Component
 * @since v1.0.0
 * @author Tracey King
 */
const DropdownItem = (props: IDropdownItemProps) => (
  <StyledDropdownItem
    {...props}
    onClick={props.isDisabled ? null : props.onClick}
  >{props.children}</StyledDropdownItem>
)

const StyledDropdownItem = styled.div<IProps>`
  ${({ css, isActive, isDisabled, theme }: IProps) => `
    padding: ${theme.spacing.base}px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s all;
    background-color: ${isActive ? theme.palette.grey[600] : theme.palette.grey[700]}};
    border-bottom: 1px solid ${theme.palette.grey[900]}};
    color: ${theme.palette.common.white};
    &:hover {
      background-color: ${theme.palette.grey[600]};
      cursor: pointer;
    }

    ${isDisabled && `
      opacity: .7;
      background: ${theme.palette.grey[700]};
      cursor: default;
      &:hover {
        cursor: default;
        background: ${theme.palette.grey[700]};
      }
    `}

    &:first-child {
      border-radius: 2px 2px 0 0;
    }

    &:last-child {
      border-bottom: none;
      border-radius: 0 0 2px 2px;
    }

    ${css ? css : ''}
  `}
`

interface IProps extends IStyledComponentProps {
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Fired click event */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
  /** Value of item */
  value?: string | number
}

export default DropdownItem
