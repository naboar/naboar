import React from 'react'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'
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

interface IProps extends IStyledComponentProps {
  /** Color of icon */
  color?: string
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
