import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { theme } from '../../theme/index'

/**
 * NavBarDivider Component
 * @since v1.0.0
 * @author Tracey King
 */
const NavBarDivider = (props: IStyledComponentProps) => {
  return (
    <Wrapper>
      <Divider css={props.css} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div<IStyledComponentProps>`
  margin: 0 5px;
  background: ${theme.palette.common.white};
  width: 1px;
  height: 30px;

  ${({ css }) => css && css}
`

export default NavBarDivider
