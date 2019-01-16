import { FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../theme/index'

export interface IStyledComponentProps {
  css?: FlattenSimpleInterpolation
  theme?: ITheme
}