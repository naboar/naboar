import React, { ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

const Td = (props: IProps) => {
  return <Wrapper css={props.css}>{props.children}</Wrapper>
}

interface IProps {
  css?: FlattenSimpleInterpolation
  children: ReactNode
}

// Styled Components ---------
const Wrapper = styled.div<{ css?: FlattenSimpleInterpolation }>`
  display: table-cell;
  padding: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-family: Open-Sans, sans-serif;
  flex: 1;
  ${({ css }) => css}
`

export default Td
