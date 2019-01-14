import React, { ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

const Thead = ({
  children,
  css,
}: {
  children: ReactNode
  css?: FlattenSimpleInterpolation
}) => {
  return <Wrapper css={css}>{children}</Wrapper>
}

const Wrapper = styled.div<{ css?: FlattenSimpleInterpolation }>`
  display: flex;
  ${({ css }) => css}
`

export default Thead
