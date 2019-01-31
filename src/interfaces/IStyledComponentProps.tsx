import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { ITheme } from '../theme/index'

export interface IStyledComponentProps {
  /** CSS styling using css from styled-components */
  css?: FlattenInterpolation<any> | FlattenSimpleInterpolation
  /** Theme */
  theme?: ITheme
}
