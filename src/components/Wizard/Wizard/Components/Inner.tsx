import React, { ReactNode } from 'react'
import styled from 'styled-components'

/**
 * Wizard Inner Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */

const Inner = (props: IInnerProps) => {
  return <Wrapper className={'inner'}>{props.children}</Wrapper>
}

export interface IInnerProps {
  children: ReactNode[] | ReactNode
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 400px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
`

export default Inner
