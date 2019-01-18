import React from 'react'
import styled, { css } from 'styled-components'
import { IFormElementProps } from '../../interfaces/'
import { ITheme } from '../../theme/index'
import FormElementWrapper from '../FormElementWrapper/FormElementWrapper'

/**
 * Slider Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Slider = (props: ISliderProps) => {
  return (
    <FormElementWrapper
      name={props.name}
      label={props.label}
      errorMessage={props.errorMessage}
    >
      <Wrapper>
        <Active width={(props.value / props.max) * 100} />
        <Range
          {...props}
          onChange={e => props.onChange(Number(e.target.value))}
        />
      </Wrapper>
    </FormElementWrapper>
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
interface ISliderProps extends IFormElementProps {
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
    cursor: pointer;
    z-index: 2;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    :active,
    :hover,
  ` as string[]

const Range = styled.input.attrs({
  type: 'range',
})`
  appearance: none;
  width: 100%;
  height: 3px;
  outline: none;
  border-radius: 20px;
  transition: opacity 0.2s;

  ${({ theme }) => `
    background: ${theme.palette.grey[700]};

    ::-webkit-slider-thumb {
      ${thumbStyle}
      box-shadow: ${theme.shadows[2]};
      background: ${theme.palette.primary.main};
      :focus {
        background: ${theme.palette.primary.main};
      }
    }

    ::-moz-range-thumb {
      ${thumbStyle}
      box-shadow: ${theme.shadows[2]};
      background: ${theme.palette.primary.main};
      :focus {
        background: ${theme.palette.primary.main};
      }
    }

    ::-ms-thumb {
      ${thumbStyle}
      box-shadow: ${theme.shadows[2]};
      background: ${theme.palette.primary.main};
      :focus {
        background: ${theme.palette.primary.main};
      }
    }
  `}
`
const Active = styled.div`
  position: absolute;
  left: 0;
  top: 60%;
  height: 3px;
  width: ${(props: { width: number }) => props.width}%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 20px 0 0 20px;
`

export default Slider
