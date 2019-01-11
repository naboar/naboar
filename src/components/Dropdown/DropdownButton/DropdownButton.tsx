import React, { Fragment } from 'react'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { Button, IconMD } from '../../../index'

/**
 * DropdownButton Component
 * @since v1.0.0
 * @author Tracey King
 */

interface IButtonProps {
  /** CSS styling using styled-components css */
  css?: FlattenSimpleInterpolation
  /** Fired click event */
  onClick: () => void
  /** Button text */
  title: string
}

const DropdownButton = (props: IButtonProps) => (
  <Button onClick={props.onClick} css={buttonStyle}>
    <Fragment>
      {props.title}
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
`

const iconStyle = css`
  padding-left: 10px;
`

export default DropdownButton
