import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { ITheme } from '../../theme'
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
        onClick={props.onClick}
        isExpanded={props.isExpanded}
        to={props.to}
      />
    </Wrapper>
  )
}

/**
 * NavDrawerHeader prop interface
 */
export interface INavDrawerHeaderProps {
  /** Custom CSS */
  css?: FlattenSimpleInterpolation
  /** Toggle input clickability */
  disabled?: boolean
  /** Expanded width */
  to: number
  /** Name of left icon */
  iconName?: iOS
  /** Is used to animate link */
  isExpanded: boolean
  /** On Click callback */
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void
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
  font-size: 35px;
  flex-direction: row-reverse;
  &:hover {
    background: transparent;
  }
  i {
    width: initial;
  }

  ${props.css ? props.css : ''}
`

interface IProps {
  css?: FlattenSimpleInterpolation
  theme: ITheme
}

export default NavDrawerHeader
