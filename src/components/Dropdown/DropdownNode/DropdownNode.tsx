import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'

/**
 * DropdownNode Component
 * @since v1.0.0
 * @author Tracey King
 */

interface IDropdownNodeProps extends IStyledComponentProps {
  /** Children */
  children?: React.ReactNode
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

const StyledDropdownNode = styled.div<IStyledComponentProps>`
  ${({ css, theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing.base}px;
    width: 100%;
    border-radius: ${theme.shape.borderRadius};
    cursor: pointer;
    box-sizing: border-box;
    color: ${theme.palette.common.white};
    background-color: ${theme.palette.primary.main};

    ${css ? css : ''}
  `}
`

export default DropdownNode
