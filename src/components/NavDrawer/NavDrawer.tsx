import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../../theme'
import { iOS } from '../Icon/IconTypes'

/**
 * NavDrawer Component
 * @since v1.0.0
 * @author Tracey King
 */

/**
 * NavDrawer State interface
 */
interface IState {
  /** isExpanded */
  isExpanded: boolean
}

/**
 * NavDrawer prop interface
 */
interface IProps {
  /** NavDrawer Links */
  children: JSX.Element | string
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Icon name iOS */
  iconName: iOS
  /** Icon size in px */
  iconSize: number
  /** isExpanded */
  isExpanded?: boolean
  /** Event fired on click */
  onClick: () => void
}

class NavDrawer extends React.Component<IProps, IState> {

}

const StyledButton = styled.button`
  background-color: ${({ theme }: IStyledProps) => theme.black};
  color: ${({ theme }: IStyledProps) => theme.white};
`

interface IStyledProps {
  theme: ITheme
}

export default NavDrawer