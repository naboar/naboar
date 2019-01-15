import React, { Component, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import Checkbox from '../Checkbox'
import DatePicker from '../DatePicker/DatePicker'
import Input from '../Input/Input'
import Pagination from '../Pagination'
import Td from './Components/Td'
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
    onCheckbox: () => undefined,
    onDateChange: () => undefined,
    onLimitChange: () => undefined,
    onRowClick: () => undefined,
    onSearchChange: () => undefined,
    onSort: () => undefined,
    onUpdatePage: () => undefined,
  }

  /** call props onSort  */
  handleSort = (key: string, order: 'asc' | 'desc') => {
    this.props.onSort(key, order)
  }

  /** call props onAllCheckboxes  */
  handleAllCheckboxes = () => {
    this.props.onAllCheckboxes()
  }

  /**  */
  handleCheckbox = (val: boolean, cellIndex: number) => {
    this.props.onCheckbox(val, cellIndex)
  }

  /** call props onRowClick */
  handleRowClick = (item: IObj, cellIndex: number) => {
    this.props.onRowClick(item, cellIndex)
  }

  /** call props onUpdatePage  */
  handleUpdatePage = (page: number) => {
    this.props.onUpdatePage(page)
  }

  /** call props onSeaechChange  */
  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(e.target.value)
  }

  /** call props onDateChange  */
  handleDateChange = (since: Date, until: Date) => {
    this.props.onDateChange(since, until)
  }

  /** call props onLimitChange  */
  handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onLimitChange(e.target.value)
  }

  /**
   * Render table headers using either the
   * key/heading or custom renderHeading method
   */
  renderHead = () => {
    const { columns, sort, order, data } = this.props
    return (
      <Thead>
        <Tr
          css={css`
            :hover {
              cursor: default;
              background-color: initial;
            }
          `}
        >
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
                  ${column.key === 'isChecked' && `flex: initial;`}
                `}
                heading={
                  column.key !== 'isChecked' ? (
                    column.heading || column.key
                  ) : (
                    <Checkbox
                      checked={data.every(item => item.isChecked)}
                      onChange={this.handleAllCheckboxes}
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

  /**
   * Render table cells using either the
   * value or custom renderCell method
   */
  renderData = () => {
    const { data, columns } = this.props

    if (!data.length) {
      return null
    }

    return [...data].map((item, i) => (
      <Tr key={i} onClick={() => this.handleRowClick(item, i)}>
        {columns.map((col, cellIndex) => {
          if (col.renderCell) {
            const element = col.renderCell(item[col.key], i, data, col)
            return React.cloneElement(element, {
              key: col.key,
            })
          }

          return (
            <Td
              key={cellIndex}
              css={css`
                ${col.key === 'isChecked' && `flex: initial;`}
              `}
            >
              {col.key !== 'isChecked' ? (
                item[col.key]
              ) : (
                <Checkbox
                  checked={item.isChecked}
                  onChange={val => this.handleCheckbox(val, i)}
                />
              )}
            </Td>
          )
        })}
      </Tr>
    ))
  }

  render() {
    return (
      <Wrapper>
        <Controls>
          {this.props.showSearch && (
            <Input
              name="table_search"
              iconName="search"
              value={this.props.term}
              onChange={this.handleSearchChange}
              type="text"
              canClear={this.props.term !== ''}
              onClear={() => this.props.onSearchChange('')}
            />
          )}
          {this.props.showDatePicker && (
            <DatePicker
              isRangePicker={true}
              onChange={this.handleDateChange}
              since={this.props.since}
              until={this.props.until}
            />
          )}

          {this.props.showLimit && (
            <LimitWrap>
              Show:{' '}
              <select onChange={this.handleLimitChange}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </LimitWrap>
          )}
        </Controls>

        {this.renderHead()}
        {this.renderData()}
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
    data?: IObj[],
    col?: ICell,
  ) => ReactElement<any>
  onClick?: (...args: any[]) => void
  isChecked?: boolean | null | undefined
  isSortable?: boolean
}

interface IObj {
  [key: string]: any
}

interface IProps {
  /** List of columns, either strings or cells with config options.
   * Documented below
   */
  columns: ICell[]
  /**
   * An array of objects all containing keys
   * that match up to the defined columns
   */
  data?: IObj[] | []
  /** key to sort by */
  sort?: string
  /** order to sort key by */
  order?: 'asc' | 'desc'
  /** called with key and order */
  onSort?: (key?: string, order?: 'asc' | 'desc') => void
  /** called when top level checkbox is clicked */
  onAllCheckboxes?: () => void
  /** called when checkbox cell is changed */
  onCheckbox?: (val: boolean, cellIndex: number) => void
  /** called when cell is clicked */
  onRowClick?: (cell?: IObj, cellIndex?: number) => void
  /** whether or not to render the pagination component */
  showPagination?: boolean
  /** called on page number click */
  onUpdatePage?: (page: number) => void
  /** current page */
  page?: number
  /** total number of pages */
  pageCount?: number
  /** whether or not to render search input */
  showSearch?: boolean
  /** search input current value */
  term?: string
  /** called when search input is updated */
  onSearchChange?: (val: string) => void
  /** whether or not to render datepicker component */
  showDatePicker?: boolean
  /** called on date change */
  onDateChange?: (since: Date, until: Date) => void
  /** current since value */
  since?: Date
  /** current until vlue */
  until?: Date
  /** whether or not to show limit selection */
  showLimit?: boolean
  /** called when limit is updated */
  onLimitChange?: (limit: number | string) => void
  /** current limit */
  limit?: number | string
}

// Styled Components -----
const Wrapper = styled.div.attrs({
  role: 'table',
})`
  width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
  background: #222;
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`
const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`
const LimitWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Open-Sans, sans-serif;
  color: rgba(255, 255, 255, 0.8);
  width: 100px;
`
export default Table
