import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../../theme'
import { IconIOS } from '../Icon'

/**
 * Message Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const Switch = (props: ISwitchProps) => {
  return (
    <StyledSwitch onClick={props.onClick}>
      <Slider isOn={props.isOn} />
    </StyledSwitch>
  )
}

/**
 * Message prop interface
 */
interface ISwitchProps {
  /** Is On for Switch */
  isOn: boolean
  /** On Click for Switch */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
}

const StyledSwitch = styled.div`
  display: inline-block;
  position: relative;
  width: 51px;
  height: 25px;
`
const Slider = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  transition: 0.4s;
  background-color: ${({ isOn, theme }) =>
    !isOn ? theme.palette.secondary.light : theme.palette.primary.main};
  &:before {
    position: absolute;
    content: ' ';
    height: 20px;
    width: 20px;
    bottom: 2px;
    left: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    ${({ isOn }) => isOn && 'transform: translateX(24px)'}
  }
`
export default Switch
