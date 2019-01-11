import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * DropdownNode Component
 * @since v1.0.0
 * @author Tracey King
 */

interface IDropdownNodeProps {
  /** Children */
  children?: JSX.Element[] | JSX.Element | string
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Fired click event */
  onClick?: () => void
  /** Value of item */
  value?: string | number
}
const DropdownNode = (props: IDropdownNodeProps) => (
  <StyledDropdownNode {...props}>{props.children}</StyledDropdownNode>
)

const StyledDropdownNode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-radius: 0;
  cursor: pointer;
  box-sizing: border-box;
  color: rgba(255,255,255, .8);
  background-color: #444;

  ${({ css }: IProps) => css && css}
`

interface IProps {
  /** CSS styling use css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Boolean identifying wheather the item is the active one */
  isActive?: boolean
  /** Boolean identifying wheather the item is disabled or not */
  isDisabled?: boolean
  /** Fired click event */
  onClick?: () => void
  /** Value of item */
  value?: string | number
}

export default DropdownNode
