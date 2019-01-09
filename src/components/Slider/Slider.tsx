import React from 'react'
import styled, { css } from 'styled-components'

/**
 * Slider Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Slider = (props: ISliderProps) => {
  return (
    <Wrapper>
      <Active width={(props.value / props.max) * 100} />
      <Range
        {...props}
        onChange={e => props.onChange(Number(e.target.value))}
      />
    </Wrapper>
  )
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1,
  value: 0,
}

/**
 * Slider prop interface
 */
interface ISliderProps {
  /** Called with new value of slider */
  onChange: (val: number) => void
  /** Value of slider */
  value: number
  /** Minimum possible value of slider */
  min?: number
  /** Maximum possible value of slider */
  max?: number
  /** Skip amount of slide */
  step?: number
}

const Wrapper = styled.div`
  position: relative;
`

const thumbStyle = css`
  appearance: none;
  width: 15px;
  height: 15px;
  position: relative;
  border-radius: 100%;
  background: white;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: #1de9b6;
  :active,
  :hover,
  :focus {
    background: #00bfa5;
  }
` as string[]

const Range = styled.input.attrs({
  type: 'range',
})`
  appearance: none;
  width: 100%;
  height: 3px;
  background: #ddd;
  outline: none;
  border-radius: 20px;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    ${thumbStyle}
  }

  ::-moz-range-thumb {
    ${thumbStyle}
  }

  ::-ms-thumb {
    ${thumbStyle}
  }
`
const Active = styled.div`
  position: absolute;
  left: 0;
  top: 60%;
  height: 3px;
  width: ${(props: { width: number }) => props.width}%;
  background-color: #1de9b6;
  border-radius: 20px 0 0 20px;
`

export default Slider
