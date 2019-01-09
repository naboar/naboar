import React from 'react'
import styled from 'styled-components'

/**
 * Slider Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Slider = (props: ISliderProps) => {
  return (
    <Wrapper>
      <Active width={10}/>
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
    appearance: none;
    width: 15px;
    height: 15px;
    position: relative;
    border-radius: 100%;
    border: 1px solid red;
    background: white;
    cursor: pointer;
    z-index: 2;
  }

  ::-moz-range-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    position: relative;
    border-radius: 100%;
    border: 1px solid red;
    background: white;
    cursor: pointer;
    z-index: 2;
  }

  ::-ms-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    position: relative;
    border-radius: 100%;
    border: 1px solid red;
    background: white;
    cursor: pointer;
    z-index: 2;
  }
`
const Active = styled.div`
  position: absolute;
  left: 0;
  top: 60%;
  height: 3px;
  width: ${(props: { width: number }) => props.width}%;
  background-color: red;
  border-radius: 20px 0 0 20px;
`

export default Slider
