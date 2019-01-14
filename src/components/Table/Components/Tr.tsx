import React, { ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

const Tr = (props: IProps) => {
  return <Wrapper>{props.children}</Wrapper>
}

Tr.defaultProps = {
  onClick: () => { return },
}

interface IProps {
  children: ReactNode
  css?: FlattenSimpleInterpolation
  onClick?: () => void
}

const Wrapper = styled.div.attrs({
  role: 'row',
})<{ css?: FlattenSimpleInterpolation }>`
  display: flex;
  flex: 1;
  border-bottom: 1px solid #555;

  :nth-child(even) {
    background-color: #f4f4f4;

    :hover {
      background-color: #f4f4f4;
    }

    ${({ css }) => css}
  }
`

export default Tr
