import React from 'react'
import styled, { css } from 'styled-components'

/**
 * Expand Component
 * transition from width || height px to px
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Expand = (props: IProps) => (
  <Expandable {...props}>{props.children}</Expandable>
)

interface IProps {
  /** One or more elements */
  children: JSX.Element | JSX.Element[]
  /** width or height(px) */
  from: number
  /** width or height(px) */
  to: number
  /** Should it expand in height */
  vertical?: boolean
  /** Whether or not the component is at full width/height */
  isExpanded?: boolean
  /** custom css */
  css?: string[]
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
`

export default Expand
