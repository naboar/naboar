import React from 'react'
import styled, { css } from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { iOS } from '../Icon'
import NavDrawerLink from './NavDrawerLink'

/**
 * NavDrawerHeader Component
 * @since v1.0.0
 * @author Tracey King
 */

const NavDrawerHeader = (props: INavDrawerHeaderProps) => {
  return (
    <Wrapper>
      <NavDrawerLink
        css={linkStyle(props)}
        title={props.title}
        iconName={props.isExpanded ? 'close' : 'menu'}
        onIconClick={props.onIconClick}
        isExpanded={props.isExpanded}
        linkRoute={props.linkRoute}
        expandTo={props.expandTo}
      />
    </Wrapper>
  )
}

/**
 * NavDrawerHeader prop interface
 */
export interface INavDrawerHeaderProps extends IStyledComponentProps {
  /** Toggle input clickability */
  disabled?: boolean
  /** Amount to be expanded in pixels */
  expandTo: number
  /** Location when link is clicked */
  linkRoute: string
  /** Name of left icon */
  iconName?: iOS
  /** Is used to animate link */
  isExpanded: boolean
  /** */
  onIconClick?: (e?: React.MouseEvent) => void
  /** Header text */
  title: string
}

const Wrapper = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.base}px;
  `}
`
const linkStyle = (props: IStyledComponentProps) => css`
  &.active {
    background: transparent;
  }
  font-size: 35px;
  flex-direction: row-reverse;
  &:hover {
    background: transparent;
  }
  i {
    width: initial;
  }
  ${props.css && props.css }
`
export default NavDrawerHeader
