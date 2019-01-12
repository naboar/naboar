import React from 'react'
import styled, { css } from 'styled-components'
import { IconIOS, Input } from '../..'

/**
 * DatePicker Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda)
 */
const Button = () => {
  return (
    <Wrapper>
      <Input name="since" iconName="calendar" type="date" />{' '}
      <IconIOS css={iconCss} size={24} color="white" name="remove" />{' '}
      <Input name="until" iconName="calendar" type="date" />
    </Wrapper>
  )
}

// Types

// Styled Components
const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`
const iconCss = css`
  margin: 0 8px;
`

export default Button
