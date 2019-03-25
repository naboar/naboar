import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * Expand Component
 * transition from width || height px to px
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Expand = (props: IProps) => (
  <Expandable {...props} className={'expand'}>{props.children}</Expandable>
)

interface IProps extends IStyledComponentProps {
  /** One or more elements */
  children: ReactNode
  /** width or height(px) */
  from: number
  /** width or height(px) */
  to: number
  /** Should it expand in height */
  vertical?: boolean
  /** Whether or not the component is at full width/height */
  isExpanded?: boolean
}

const verticalStyle = css`
  height: ${(props: IProps) => (props.isExpanded ? props.to : props.from)}px;
` as string[]

const horizontalStyle = css`
  width: ${(props: IProps) => (props.isExpanded ? props.to : props.from)}px;
` as string[]

const Expandable = styled.div`
  transition: height 0.2s, width 0.2s;
  overflow: hidden;
  display: inline-block;
  ${(props: IProps) => (props.vertical ? verticalStyle : horizontalStyle)}
  ${(props: IProps) => props.css && props.css}
`

export default Expand
