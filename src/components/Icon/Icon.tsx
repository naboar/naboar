import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * Icon Component
 * @since v1.0.0
 * @author Tracey King
 */

const Icon = styled.i`
  color: ${({ theme, color }: IProps) => color || theme.palette.common.black};
  font-size: ${({ size }: IProps) => size || 19}px;

  ${({ css }: IProps) => css && css}
`

interface IProps extends IStyledComponentProps {
  /** Color of icon */
  color?: string
  /** Event fired on click */
  onClick?: (e: any) => void
  /** Event fired on mouse down */
  onMouseDown?: (e: any) => void
  /** Size of font in px */
  size?: number
}

export default Icon
