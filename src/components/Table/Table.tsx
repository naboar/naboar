import React, { Component, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import Pagination from '../Pagination'
import Th from './Components/Th'
import Thead from './Components/Thead'
import Tr from './Components/Tr'

/**
 * Table Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class Table extends Component<IProps> {
  static defaultProps: IProps = {
    columns: [],
    data: [],
    onAllCheckboxes: () => undefined,
    onSort: () => undefined,
    onUpdatePage: () => undefined,
  }

  handleSort = (key: string, order: 'asc' | 'desc') => {
    this.props.onSort(key, order)
  }

  handleAllCheckboxes = () => {
    this.props.onAllCheckboxes()
  }

  handleUpdatePage = (page: number) => {
    this.props.onUpdatePage(page)
  }

  renderHead = () => {
    const { columns, sort, order, data } = this.props
    return (
      <Thead>
        <Tr>
          {[...columns].map((column: ICell, colIndex) => {
            if (column.renderHeading) {
              const element = column.renderHeading(
                column.heading,
                colIndex,
                column,
              )
              return React.cloneElement(element, {
                ...column,
                ...element.props,
                _key: column.key,
                isSortable: column.isSortable,
                key: column.key,
                onClick: column.onClick || this.handleSort,
                order,
                sort,
              })
            }

            return (
              <Th
                key={column.key}
                _key={column.key}
                sort={sort}
                order={order}
                onClick={this.handleSort}
                isSortable={column.key !== 'isChecked'}
                css={css`
                  ${column.key === 'isChecked' && `width: 35px;`}
                `}
                heading={
                  column.key !== 'isChecked' ? (
                    column.heading || column.key
                  ) : (
                    <input
                      type="checkbox"
                      checked={data.every(item => item.isChecked)}
                      onClick={this.handleAllCheckboxes}
                    />
                  )
                }
              />
            )
          })}
        </Tr>
      </Thead>
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderHead()}
        {this.props.showPagination && (
          <PaginationWrap>
            <Pagination
              page={this.props.page}
              pageCount={this.props.pageCount}
              onClick={this.handleUpdatePage}
              showEllipses={true}
            />
          </PaginationWrap>
        )}
      </Wrapper>
    )
  }
}

// Types -----
interface ICell {
  key: string
  heading?: string
  renderHeading?: (
    heading: string,
    index?: number,
    col?: ICell,
  ) => ReactElement<any>
  renderCell?: (
    cell: string,
    index?: number,
    data?: Array<{ [key: string]: any }>,
    col?: ICell,
  ) => ReactElement<any>
  onClick?: (...args: any[]) => void
  isChecked?: boolean | null | undefined
  isSortable?: boolean
}

interface IProps {
  /** List of columns, either strings or cells with config options */
  columns: ICell[]
  /**
   * An array of objects all containing keys
   * that match up to the defined columns
   */
  data?: Array<{ [key: string]: any }> | []
  /**  */
  sort?: string
  /**  */
  order?: 'asc' | 'desc'
  /**  */
  onSort?: (key?: string, order?: 'asc' | 'desc') => void
  /**  */
  onAllCheckboxes?: () => void
  /**  */
  showPagination?: boolean
  /**  */
  onUpdatePage?: (page: number) => void
  /**  */
  page?: number
  /**  */
  pageCount?: number
}

// Styled Components -----
const Wrapper = styled.div.attrs({
  role: 'table',
})`
  width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
`
const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`
export default Table
