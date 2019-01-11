import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * DropdownMenu Component
 * @since v1.0.0
 * @author Tracey King
 */

interface IDropdownMenuProps {
  /** Children */
  children?: JSX.Element[] | JSX.Element | string,
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Value of item */
  value?: string | number
}

const DropdownMenu = (props: IDropdownMenuProps) => (
  <StyledDropdownMenu {...props}>{props.children}</StyledDropdownMenu>
)
const StyledDropdownMenu = styled.div`
  position: absolute;
  width: auto;
  min-width: 300px;
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

interface IProps {
  /** CSS styling use css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Value of item */
  value?: string | number
}

export default DropdownMenu
