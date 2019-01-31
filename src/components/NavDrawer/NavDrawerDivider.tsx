import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { theme } from '../../theme/index'

/**
 * NavDrawerDivider Component
 * @since v1.0.0
 * @author Tracey King
 */
const NavDrawerDivider = (props: IStyledComponentProps) => {
  return (
    <Wrapper>
      <Divider css={props.css} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div<IStyledComponentProps>`
  margin: 5px 0;
  background: ${theme.palette.common.white};
  width: 100%;
  height: 1px;

  ${({ css }) => css && css}
`

export default NavDrawerDivider
