import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import Icon from '../Icon'
import { logo } from '../IconTypes'

/**
 * Icon Logo Component
 * @since v1.0.0
 * @author Tracey King
 */

const IconLogo = (props: IProps) => (
  <Icon {...props} className={`icon ion-logo-${props.name}`} />
)

interface IProps {
  /** Color of icon */
  color?: string
  /** CSS properties using css helper from styled-components */
  css?: FlattenSimpleInterpolation
  /** Ionicon icon name */
  name: logo
  /** Event fired on click */
  onClick?: () => void
  /** Size of font in px */
  size?: number
}

export default IconLogo
