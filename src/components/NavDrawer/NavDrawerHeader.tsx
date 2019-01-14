import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Expand } from '../..'
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
      <NavDrawerLink
        css={linkStyle(props.css)}
        title={props.title}
        iconName={props.isExpanded ? 'close' : 'menu'}
        onIconClick={props.onIconClick}
        onClick={props.onClick}
        isExpanded={props.isExpanded}
        to={props.to}
      />
  )
}

/**
 * NavDrawerHeader prop interface
 */
export interface INavDrawerHeaderProps {
  /** Toggle input clear option */
  canClear?: boolean
  /** Custom CSS */
  css?: FlattenSimpleInterpolation
  /** Default Value of input field */
  defaultValue?: string
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

const linkStyle = (propsCss: FlattenSimpleInterpolation) => css`
  padding: 15px;
  font-size: 35px;
  flex-direction: row-reverse;
  i {
    width: initial;
  }

  ${propsCss}
`

interface IProps {
  css?: FlattenSimpleInterpolation
  theme: ITheme
}

export default NavDrawerHeader
