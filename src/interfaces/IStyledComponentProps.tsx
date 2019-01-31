import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { ITheme } from '../theme/index'

export interface IStyledComponentProps {
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation | FlattenInterpolation<any>
  /** Theme */
  theme?: ITheme
}
