import React, { Fragment } from 'react'
import { css } from 'styled-components'
import { Button, IconMD } from '../../../index'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'

interface IButtonProps extends IStyledComponentProps {
  /** Fired click event */
  onClick: () => void
  /** Button text */
  text: string,
  /** Button name used for form */
  name: string
}

/**
 * DropdownButton Component
 * @since v1.0.0
 * @author Tracey King
 */
const DropdownButton = (props: IButtonProps) => (
  <Button onClick={props.onClick} css={buttonStyle} name={props.name}>
    <Fragment>
      {props.text}
      <IconMD name="arrow-dropdown" size={19} color={'white'} css={iconStyle} />
    </Fragment>
  </Button>
)

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  border: none;
  background: #444;
  color: rgba(255,255,255, .8);
`

const iconStyle = css`
  padding-left: 10px;
`

export default DropdownButton
