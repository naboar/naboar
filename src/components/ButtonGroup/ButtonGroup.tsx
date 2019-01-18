import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { Button } from '../../../src'
import { IButtonProps } from '../../components/Button/Button'

/**
 * ButtonGroup Component
 * @since v1.0.0
 * @author [Jonathan Currie](https://github.com/jbcurrie)
 */


const ButtonGroup = (props: IButtonGroupProps) => {
  return (
    <ButtonGroupWrapper>
      {React.Children.toArray(props.children).map(
        (child: React.ReactElement<IButtonProps>, index) => {
          return React.cloneElement(child, {
            // _buttonGroupClick: props.onChange,
            // _buttonGroupIndex: index,
            isActive: child.props.value === props.activeValue
        })
        },
      )}
    </ButtonGroupWrapper>
  )
}

ButtonGroup.defaultProps = {
  activeValue: null
}

const ButtonGroupWrapper = styled.div<IButtonGroupWrapperProps>`
  display: inline-flex;
  flex: 0;
  align-self: flex-start;
  box-sizing: border-box;
  button {
    box-shadow: none;
    border-right: 1px solid black;
    border-radius: 0;
  }
  button:first-child {
    border-radius: 2px 0 0 2px;
  }
  button:last-child {
    border-radius: 0 2px 2px 0;
    border-right: none;
  }
`

interface IButtonGroupProps {
  activeValue: string | number
  /** Button Group Child */
  children: React.ReactElement<IButtonGroupWrapperProps>
  /** CSS styling using styled-components css */
  css?: FlattenSimpleInterpolation
  /** onChange event trigged by button click */
  // onChange: (value: any, index: number, e: React.MouseEvent<HTMLButtonElement>) => void
}

interface IButtonGroupWrapperProps {
  children: Button[]
}

export default ButtonGroup
