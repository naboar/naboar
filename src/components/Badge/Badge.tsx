import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../../theme'

/**
 * Badge Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */
const Badge = (props: IBadgeProps) => {
  return <StyledBadge {...props}>{props.children}</StyledBadge>
}

/**
 * Badge prop interface
 */
interface IBadgeProps {
  /**
   * Event fired on click
   */
  onClick: () => void
  /**
   * Text displayed inside of the badge
   */
  children: JSX.Element | string
  /**
   * Toggle badge clickability
   */
  disabled?: boolean
  /**
   * Toggle if badge can close
   */
  canClose?: boolean
  /**
   * Even fired on close
   */
  onClose?: () => void
}

const StyledBadge = styled.span`
  background-color: ${({ theme }: IProps) => theme.black};
  color: ${({ theme }: IProps) => theme.white};
`

interface IProps {
  theme: ITheme
}

export default Badge
