import React from 'react'
import styled, { css } from 'styled-components'
import { IconMD } from '../../Icon'

/**
 * SortIcon Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const SortIcon = (props: IProps) => {
  if (!props.isSortable) {
    return null
  }

  const isSorted = String(props.sort) === String(props._key)

  return (
    <Sortable>
      <IconMD.White
        name="arrow-dropup"
        size={16}
        css={css`
          margin-top: -2px;
          color: ${setColor('asc', props.order, isSorted)};
        `}
      />
      <IconMD.White
        name="arrow-dropdown"
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
