import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'

/**
 * Td Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Td = (props: IProps) => {
  return <Wrapper css={props.css}>{props.children}</Wrapper>
}

interface IProps extends IStyledComponentProps {
  children: ReactNode
}

// Styled Components ---------
const Wrapper = styled.div<IStyledComponentProps>`
  display: table-cell;
  padding: 10px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-family: Open-Sans, sans-serif;
  flex: 1;
  ${({ css }) => css}
`

export default Td
