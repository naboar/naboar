import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
import Icon from '../Icon'
import { iOS } from '../IconTypes'

/**
 * Icon IOS Component
 * @since v1.0.0
 * @author Tracey King
 */

const IconIOS = (props: IProps) => (
  <Icon {...props} className={`icon ion-ios-${props.name}`} />
)

interface IProps {
  /** Color of icon */
  color?: string
  /** CSS properties using css helper from styled-components */
  css?: FlattenSimpleInterpolation
  /** Ionicon icon name */
  name: iOS
  /** Event fired on click */
  onClick?: (e: any) => void
  /** Size of font in px */
  size?: number
}

const IconIOSBlack = (props: IProps) => <IconIOS {...props} color={'black'} />
const IconIOSWhite = (props: IProps) => <IconIOS {...props} color={'white'} />

IconIOS.Black = IconIOSBlack
IconIOS.White = IconIOSWhite

export default IconIOS
