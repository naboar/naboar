import React from 'react'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'
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

interface IProps extends IStyledComponentProps {
  /** Color of icon */
  color?: string
  /** Ionicon icon name */
  name: logo
  /** Event fired on click */
  onClick?: (e: any) => void
  /** Size of font in px */
  size?: number
}

const IconLogoBlack = (props: IProps) => <IconLogo {...props} color={'black'} />
const IconLogoWhite = (props: IProps) => <IconLogo {...props} color={'white'} />

IconLogo.Black = IconLogoBlack
IconLogo.White = IconLogoWhite

export default IconLogo
