import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IconIOS } from '../..'

const Pagination = ({
  page,
  pageCount,
  pageSkip,
  showFirst,
  showLast,
  showEllipses,
  firstText,
  lastText,
  prevText,
  nextText,
  maintainSkipWidth,
  onClick,
}: IProps) => {
  const handleNext = (e: React.MouseEvent<HTMLLIElement>) => {
    const pageNumber = page + 1
    if (pageNumber > pageCount) {
      return
    }
    onClick(pageNumber, e)
  }
  const handlePrev = (e: React.MouseEvent<HTMLLIElement>) => {
    const pageNumber = page - 1
    if (pageNumber < 1) {
      return
    }
    onClick(pageNumber, e)
  }

  const handleSkip = (
    pageNumber: number,
    e: React.MouseEvent<HTMLLIElement>,
  ) => {
    if (page === pageNumber) {
      return
    }
    onClick(pageNumber, e)
  }

  const handleFirst = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(1, e)
  }

  const handleLast = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick(pageCount, e)
  }

  const First = () => {
    if (!showFirst) {
      return null
    }
    return (
      <PageControl disabled={page <= 1} onClick={handleFirst}>
        {firstText}
      </PageControl>
    )
  }

  const Prev = () => {
    return (
      <PageControl disabled={page <= 1} onClick={handlePrev}>
        {prevText}
      </PageControl>
    )
  }

  const LeftEllipses = () => {
    if (!showEllipses) {
      return null
    }
    if (pageSkip * 2 >= pageCount) {
      return null
    }
    if (page <= pageSkip + 1) {
      return null
    }

    return [
      <PageControl key="skip-right" onClick={e => handleSkip(1, e)}>
        1
      </PageControl>,
      <PageControl key="left-ellipses" noBorder={true}>
        <IconIOS name="more" size={30} color={'rgba(0,0,0,.65)'} />
      </PageControl>,
    ]
  }

  const RightEllipses = () => {
    if (!showEllipses) {
      return null
    }
    if (pageSkip * 2 >= pageCount) {
      return null
    }
    if (page >= pageCount - pageSkip) {
      return null
    }

    return [
      <PageControl key="right-ellipses" noBorder={true}>
        <IconIOS name="more" size={30} color={'rgba(0,0,0,.65)'} />
      </PageControl>,
      <PageControl key="skip-right" onClick={e => handleSkip(pageCount, e)}>
        {pageCount}
      </PageControl>,
    ]
  }

  const buildPages = () => {
    if (pageSkip <= 0) {
      return null
    }

    const frontSkip = maintainSkipWidth
      ? pageCount - page < pageSkip
        ? pageSkip - (pageCount - page) + pageSkip
        : pageSkip
      : pageSkip

    const backSkip = maintainSkipWidth
      ? page <= pageSkip
        ? pageSkip + (pageSkip - page + 1)
        : pageSkip
      : pageSkip

    const front = new Array(frontSkip).fill(page).reduce((arr, next, index) => {
      next = next - index - 1
      if (next < 1) {
        return arr
      }
      return [next, ...arr]
    }, [])

    const back = new Array(backSkip).fill(page).reduce((arr, next, index) => {
      next = next + index + 1
      if (next > pageCount) {
        return arr
      }
      return [...arr, next]
    }, [])

    return [...front, page, ...back].map(pageNumber => (
      <PageControl
        key={pageNumber}
        selected={page === pageNumber}
        onClick={e => handleSkip(pageNumber, e)}
      >
        {pageNumber}
      </PageControl>
    ))
  }

  const Next = () => {
    return (
      <PageControl disabled={page >= pageCount} onClick={handleNext}>
        {nextText}
      </PageControl>
    )
  }

  const Last = () => {
    if (!showLast) {
      return null
    }
    return (
      <PageControl disabled={page >= pageCount} onClick={handleLast}>
        {lastText}
      </PageControl>
    )
  }

  return (
    <List>
      <Prev />
      <First />
      {LeftEllipses()}
      {buildPages()}
      {RightEllipses()}
      <Last />
      <Next />
    </List>
  )
}

Pagination.defaultProps = {
  firstText: 'First',
  lastText: 'Last',
  nextText: <IconIOS name={'arrow-forward'} />,
  page: 1,
  pageCount: 1,
  pageSkip: 1,
  prevText: <IconIOS name={'arrow-back'} />,
  showEllipses: false,
  showFirst: false,
  showLast: false,
}

// Types ----
interface IProps {
  page: number
  pageCount: number
  onClick: (page?: number, e?: React.MouseEvent<HTMLLIElement>) => void
  pageSkip?: number
  showFirst?: boolean
  showLast?: boolean
  showEllipses?: boolean
  firstText?: ReactNode
  lastText?: ReactNode
  nextText?: ReactNode
  prevText?: ReactNode
  maintainSkipWidth?: boolean
}

// Styled Components --

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  user-select: none;
`
const PageControl = styled.li<{
  noBorder?: boolean,
  disabled?: boolean,
  selected?: boolean
}>`
  background-color: #ffffff;
  color: #000000;
  border-radius: 4px;
  height: 32px;
  text-align: center;
  line-height: 30px;
  margin-right: 8px;
  cursor: ${({ noBorder }) => (noBorder ? 'default' : 'pointer')};
  min-width: ${({ noBorder }) => (noBorder ? '24px' : '32px')};
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #d9d9d9')};
  font-family: Lato-Light, sans-serif;
  ${({ disabled }) =>
    disabled &&
    `
    opacity: .7;
    cursor: not-allowed;
    & * {
      opacity: .7
    }
 `};
  ${({ selected }) =>
    selected &&
    `
    border-color: red;
    color: red
  `};
  &:hover {
    opacity: 0.8;
  }
`

const Ellipses = styled.li`
  margin: 0;
  padding: 7px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 16px;
  font-family: Lato-Light, sans-serif;
`

export default Pagination
