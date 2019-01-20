import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Expand } from '../..'
import { ITheme } from '../../theme'
import { IconIOS } from '../Icon'
import NavBarLink from './NavBarLink'

/**
 * NavBarHeader Component
 * @since v1.0.0
 * @author Tracey King
 */

const NavBarHeader = (props: INavBarHeaderProps) => {
  return (
      <NavBarLink
        css={linkStyle(props.css)}
        onClick={props.onClick}
      >
      <IconIOS
        name={'flash'}
        css={['margin-right: 5px; font-size: 24px; color: #ffb300;']}
      />
      {props.title}
      </NavBarLink>
  )
}

/**
 * NavBarHeader prop interface
 */
export interface INavBarHeaderProps {
  /** Custom CSS */
  css?: FlattenSimpleInterpolation
  /** Toggle input clickability */
  disabled?: boolean
  /** On Click callback */
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void
  /** Header text */
  title: string
}

const linkStyle = (propsCss: FlattenSimpleInterpolation) => css`
  font-size: 16px;
  font-weight: bold;
  i {
    width: initial;
  }

  ${propsCss ? propsCss : ''}
`

interface IProps {
  css?: FlattenSimpleInterpolation
  theme: ITheme
}

export default NavBarHeader
