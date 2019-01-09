import React, { Component, ReactNode, SyntheticEvent } from 'react'
import styled, { css } from 'styled-components'

/**
 * Fade Component
 * Fades in a component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Fade = (props: IProps) => (
  <StyledFade {...props}>{props.children}</StyledFade>
)
interface IProps {
  /** One or more elements */
  children: ReactNode
  /** How far off is the component */
  distance: number
  /** The direction it fades from */
  from: 'left' | 'top' | 'right' | 'bottom'
  /** Whether or not the component is at full width/height */
  shouldShow?: boolean
}

const fromLeft = css`
  transform: translateX(${({ distance }: IProps) => distance}px);
` as string[]
const fromRight = css`
  transform: translateX(-${({ distance }: IProps) => distance}px);
` as string[]
const fromTop = css`
  transform: translateY(-${({ distance }: IProps) => distance}px);
` as string[]
const fromBottom = css`
  transform: translateY(${({ distance }: IProps) => distance}px);
` as string[]

const getFrom = (from: string) => {
  switch (from) {
    case 'left':
      return fromLeft
    case 'right':
      return fromRight
    case 'top':
      return fromTop
    case 'bottom':
      return fromBottom
    default:
      return fromLeft
  }
}
const shownStyle = css`
  opacity: 1;
  pointer-events: all;
  transform: none;
` as string[]

const hiddenStyle = css`
  opacity: 0;
  ${({ from }: IProps) => getFrom(from)}
` as string[]

const StyledFade = styled.div`
  display: inline-block;
  transition: all 0.3s ease-out;
  ${(props: IProps) => (props.shouldShow ? shownStyle : hiddenStyle)}
`

export default Fade
