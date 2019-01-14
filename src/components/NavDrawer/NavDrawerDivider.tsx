import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import Expand from '../../effects/Expand'
import { theme } from '../../theme/index'


/**
 * NavDrawerDivider Component
 * @since v1.0.0
 * @author Tracey King
 */
const NavDrawerDivider = (props: INavDrawerDividerProps) => {
  return (
    <Wrapper>
      <Divider css={props.css}/>
    </Wrapper>
  )
}

interface INavDrawerDividerProps {
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div<{css?: FlattenSimpleInterpolation}>`
  margin: 5px 0;
  background: white;
  width: 100%;
  height: 1px;

  ${({ css }) => css && css}
`

export default NavDrawerDivider