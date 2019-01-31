import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'
import SortIcon from './SortIcon'

/**
 * Th Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Th = (props: IProps) => {
  const handleSort = () => {
    const nextOrder = props.order === 'asc' ? 'desc' : 'asc'
    props.onClick(props._key, nextOrder)
  }
  return (
    <Base css={props.css}>
      <Container>
        <Heading onClick={props.isSortable ? handleSort : null}>
          {typeof props.heading === 'string'
            ? camelToUppercase(props.heading)
            : props.heading}
          <SortIcon
            isSortable={props.isSortable}
            _key={props._key}
            sort={props.sort}
            order={props.order}
          />
        </Heading>
      </Container>
    </Base>
  )
}

interface IProps extends IStyledComponentProps {
  heading: ReactNode
  key?: string
  _key?: string
  sort?: string
  order?: 'asc' | 'desc'
  onClick?: (key: string, order: 'asc' | 'desc') => void
  isSortable?: boolean
}

const camelToUppercase = (str: string) =>
  str.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())

// Styled Components ---------
const Base = styled.div.attrs({
  role: 'columnheader',
})<IStyledComponentProps>`
  display: table-cell;
  font-family: Open-Sans, sans-serif;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  vertical-align: center;
  color: rgba(255, 255, 255, 0.8);
  flex: 1;
  ${({ css }) => css}
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

const Heading = styled.span`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

export default Th
