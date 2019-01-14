import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import Expand from '../../effects/Expand'
import { ITheme } from '../../theme'
import { IconMD, md } from '../Icon'

/**
 * NavBarLink Component
 * @since v1.0.0
 * @author Tracey King
 */

const NavBarLink = (props: INavBarLinkProps) => {
  return (
    <Wrapper
      css={props.css}
      onClick={props.onClick}
      isActive={props.isActive}
    >
    {props.children || props.title}
    </Wrapper>
  )
}

/**
 * NavBarLink prop interface
 */
export interface INavBarLinkProps {
  /** Custom CSS */
  css?: FlattenSimpleInterpolation
  /** Children */
  children?: React.ReactNode
  /** Is active link */
  isActive?: boolean
  /** On Click callback */
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void
  /** Header text */
  title?: string
}

const Wrapper = styled.div`
  align-items: center;
  background: ${({ theme, isActive }: IProps) =>
    isActive ? '#11a07c' : 'transparent'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  height: 40px;
  padding: 0 15px;
  font-size: 14px;
  min-width: 133px;
  &:hover {
    cursor: pointer;
    background: #11a07c;
  }

  ${(props: IProps) => props.css && props.css}
`

interface IProps {
  css?: FlattenSimpleInterpolation
  isActive?: boolean
  theme: ITheme
}

export default NavBarLink
