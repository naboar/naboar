import React, { ReactNode } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

/**
 * Tr Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Tr = (props: IProps) => {
  return (
    <Wrapper css={props.css} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  )
}

Tr.defaultProps = {
  onClick: () => {
    return
  },
}

interface IProps {
  children: ReactNode
  css?: FlattenSimpleInterpolation
  onClick?: () => void
}

const Wrapper = styled.div.attrs({
  role: 'row',
})<{ css?: FlattenSimpleInterpolation }>`
  transition: background-color 0.1s;
  display: flex;
  flex: 1;
  border-bottom: 1px solid #555;
  cursor: pointer;

  :nth-child(even) {
    background-color: #303030;
    :hover {
      background: #444;
    }
  }
  :hover {
    background-color: #333;
  }

  ${({ css }) => css}
`

export default Tr
