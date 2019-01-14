import React from 'react'
import styled, { css } from 'styled-components'
import { IconIOS } from '../../Icon'

const SortIcon = (props: IProps) => {
  if (!props.isSortable) {
    return null
  }

  const isSorted = String(props.sort) === String(props._key)

  return (
    <Sortable>
      <IconIOS
        name="arrow-up"
        size={16}
        css={css`
          margin-top: -2px;
          color: ${setColor('asc', props.order, isSorted)};
        `}
      />
      <IconIOS
        name="arrow-down"
        size={16}
        css={css`
          margin-top: -5px;
          color: ${setColor('desc', props.order, isSorted)};
        `}
      />
    </Sortable>
  )
}

interface IProps {
  isSortable: boolean
  sort: string
  order: 'asc' | 'desc'
  _key: string
}

const setColor = (
  dir: 'asc' | 'desc',
  order: 'asc' | 'desc',
  isSorted: boolean,
) => (dir === order && isSorted ? '#fff' : '#aaa')

// Styled Components ---------
const Sortable = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 8px;
  opacity: 0.6;
`

export default SortIcon
