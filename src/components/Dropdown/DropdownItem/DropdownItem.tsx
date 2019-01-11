import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

interface IDropdownItemProps {
  /** Children */
  children?: JSX.Element[] | JSX.Element | string
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
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
  <StyledDropdownItem {...props}>{props.children}</StyledDropdownItem>
)

const StyledDropdownItem = styled.div.attrs({
  onClick: ({ onClick }: IProps) => onClick,
  value: ({ value }: IProps) => value,
})`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s all;
  background-color: ${({ isActive }: IProps) =>
    isActive ? '#333' : '#444'};
  border-bottom: 1px solid #dcdcdc;
  color: rgba(255,255,255, .8);
  &:hover {
    background-color: #555;
    cursor: pointer;
  }

  &:disabled {
    background-color: #2222;
    cursor: default;
  }

  &:first-child {
    border-radius: 2px 2px 0 0;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 2px 2px;
  }

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
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
  /** Value of item */
  value?: string | number
}

export default DropdownItem
