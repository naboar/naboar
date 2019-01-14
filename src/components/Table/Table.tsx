import React, { Component, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import Checkbox from '../Checkbox'
import DatePicker from '../DatePicker/DatePicker'
import Input from '../Input/Input'
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
    onDateChange: () => undefined,
    onLimitChange: () => undefined,
    onSearchChange: () => undefined,
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

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(e.target.value)
  }

  handleDateChange = (since: Date, until: Date) => {
    this.props.onDateChange(since, until)
  }

  handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onLimitChange(e.target.value)
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

  renderData = (): null => {
    return null
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
              canClear={true}
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
    data?: Array<{ [key: string]: any }>,
    col?: ICell,
  ) => ReactElement<any>
  onClick?: (...args: any[]) => void
  isChecked?: boolean | null | undefined
  isSortable?: boolean
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
  data?: Array<{ [key: string]: any }> | []
  /** key to sort by */
  sort?: string
  /** order to sort key by */
  order?: 'asc' | 'desc'
  /** called with key and order */
  onSort?: (key?: string, order?: 'asc' | 'desc') => void
  /** called when top level checkbox is clicked */
  onAllCheckboxes?: () => void
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
