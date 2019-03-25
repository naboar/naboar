import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'

interface IDropdownMenuProps extends IStyledComponentProps {
  /** Children */
  children?: React.ReactNode
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Value of item */
  value?: string | number
}

/**
 * DropdownMenu Component
 * @since v1.0.0
 * @author Tracey King
 */
const DropdownMenu = (props: IDropdownMenuProps) => (
  <StyledDropdownMenu {...props} className={'dropdownMenu'}>{props.children}</StyledDropdownMenu>
)

const StyledDropdownMenu = styled.div`
  position: absolute;
  width: auto;
  min-width: 150px;
  visibility: ${({ isActive, isDisabled = false }: IProps) =>
    !isDisabled && isActive ? 'visible' : 'hidden'};
  opacity: ${({ isActive, isDisabled = false }: IProps) =>
    !isDisabled && isActive ? 1 : 0};
  background-color: white;
  margin-top: 3px;
  border-radius: 2px;
  z-index: 10000;
  transition: 0.2s ease;
  left: 0;

  ${({ css }: IProps) => css && css}
`

interface IProps extends IStyledComponentProps {
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Value of item */
  value?: string | number
}

export default DropdownMenu
