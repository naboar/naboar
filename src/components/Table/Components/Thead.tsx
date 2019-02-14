import React, { ReactNode } from 'react'
import styled, {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'

/**
 * Thead Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Thead = ({
  children,
  css,
}: {
  children: ReactNode
  css?: FlattenSimpleInterpolation | FlattenInterpolation<any>
}) => {
  return <Wrapper css={css}>{children}</Wrapper>
}

const Wrapper = styled.thead<{
  css?: FlattenSimpleInterpolation | FlattenInterpolation<any>
}>`
  display: flex;
  ${({ css }) => css}
`

export default Thead
