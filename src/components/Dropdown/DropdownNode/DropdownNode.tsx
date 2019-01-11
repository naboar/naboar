import React from 'react'
import styled from 'styled-components'
import { FlattenSimpleInterpolation } from 'styled-components'

/**
 * DropdownNode Component
 * @since v1.0.0
 * @author Tracey King
 */

interface IDropdownNodeProps {
  /** Children */
  children?: JSX.Element | string
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
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
  color: black;
  background-color: white;

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
  /** Element or String */
  children?: JSX.Element | string
}

export default DropdownNode
