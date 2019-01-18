import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import Expand from '../../effects/Expand'
import { theme } from '../../theme/index'


/**
 * NavBarDivider Component
 * @since v1.0.0
 * @author Tracey King
 */
const NavBarDivider = (props: INavBarDividerProps) => {
  return (
    <Wrapper>
      <Divider css={props.css}/>
    </Wrapper>
  )
}

interface INavBarDividerProps {
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div<{css?: FlattenSimpleInterpolation}>`
  margin: 0 5px;
  background: ${theme.palette.common.white};
  width: 1px;
  height: 30px;

  ${({ css }) => css && css}
`

export default NavBarDivider