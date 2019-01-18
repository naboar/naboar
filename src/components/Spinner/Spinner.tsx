import React, { ReactChild } from 'react'
import styled, { css, FlattenSimpleInterpolation, keyframes } from 'styled-components'

/**
 * Datalist Component
 * @since v1.0.0
 * @author [Jonathan Currie](https://github.com/jbcurrie)
 */

const Spinner = (props: ISpinnerProps) => {
  return (
    <SpinnerContainer css={props.css}>
      <SvgElement viewBox={'25 25 50 50'}>
        <Circle />
      </SvgElement>
    </SpinnerContainer>
  )
}

interface ISpinnerProps {
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
}

const opacityChange = keyframes`
  0%{
    background: rgba(0,0,0,0);
  }
  100% {
    background: rgba(0,0,0,.125);
  }
`

const rotator = keyframes`
  100% {transform: rotate(360deg); }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`

const SpinnerContainer = styled.div<{
  css?: FlattenSimpleInterpolation
}>`
  display: flex;
  align-items:center;
  justify-content:center;
  z-index: 1;
  animation: ${opacityChange} .3s ease-in-out fowards;
  ${props => props.css}
`
const SvgElement = styled.svg`
  width: 100px;
  animation: ${rotator} 2s linear infinite;
`

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  cx: 50;
  cy: 50;
  r: 20;
  stroke-dashoffset: 0;
  stroke: ${({ theme }) => theme.palette.primary.main};
  transform-origin: center;
  animation: ${dash} 1.5s ease-in-out infinite;
`

export default Spinner