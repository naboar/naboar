import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'
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
  css?: FlattenSimpleInterpolation
  /** Ionicon icon name */
  name: md
  /** Event fired on click */
  onClick?: (e: any) => void
  /** Size of font in px */
  size?: number
}

const IconMDBlack = (props: IProps) => <IconMD {...props} color={'black'} />
const IconMDWhite = (props: IProps) => <IconMD {...props} color={'white'} />

IconMD.Black = IconMDBlack
IconMD.White = IconMDWhite

export default IconMD
