import React from 'react'
import Icon from '../Icon'
import { md } from '../IconTypes'

/**
 * Icon Material Component
 * @since v1.0.0
 * @author Tracey King
 */

const IconMD = (props: IProps) => (
  <Icon {...props} className={`icon ion-md-${props.name}`} />
)

interface IProps {
  /** Color of icon */
  color?: string
  /** CSS properties using css helper from styled-components */
  css?: string[]
  /** Ionicon icon name */
  name: md
  /** Event fired on click */
  onClick?: () => void
  /** Size of font in px */
  size?: number
}

export default IconMD
