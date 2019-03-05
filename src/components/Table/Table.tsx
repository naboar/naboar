import React, { Component, ReactElement } from 'react'
import styled, {
  css,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/'
import Checkbox from '../Checkbox'
import DatePicker from '../DatePicker/DatePicker'
import Input from '../Input'
import Label from '../Label'
import Pagination from '../Pagination'
import Select from '../Select/Select'
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
    onClearSearch: () => undefined,
    onDateChange: () => undefined,
    onLimitChange: () => undefined,
    onRowClick: () => undefined,
    onSearchChange: () => undefined,
    onSelectChange: () => undefined,
    onSort: () => undefined,
    onUpdatePage: () => undefined,
    showToolbarLabels: true,
    toolbarTheme: 'fill',
  }

  /** call props onSort  */
  handleSort = (key: string, order: 'asc' | 'desc') => {
    this.props.onSort(key, order)
  }

  /** call props onAllCheckboxes  */
  handleAllCheckboxes = () => {
    this.props.onAllCheckboxes()
  }

  /** call props onCheckbox */
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

  /** call props onSearchChange  */
  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(e)
  }

  /** call clear search  */
  handleClearSearch = () => {
    this.props.onClearSearch(undefined)
  }
  /** call props onDateChange  */
  handleDateChange = (since: Date, until: Date) => {
    this.props.onDateChange(since, until)
  }

  /** call props onLimitChange  */
  handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onLimitChange(e.target.value)
  }

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.onSelectChange(e)
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
                      name={column.key}
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
                  name={col.key + cellIndex}
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
    const isToolbarOutlineTheme =
      this.props.toolbarTheme === 'outline' ? true : false
    return (
      <Wrapper>
        <ControlsContainer controlsCss={this.props.controlsCss}>
          <Controls>
            {this.props.showSearch && (
              <ElementWrapper>
                <Input
                  name="table_search"
                  iconName="search"
                  value={this.props.term}
                  onChange={this.handleSearchChange}
                  type="text"
                  canClear={this.props.term !== ''}
                  onClear={this.handleClearSearch}
                  outline={isToolbarOutlineTheme}
                  css={tableInputCss}
                  label={this.props.showToolbarLabels ? 'Search' : ''}
                />
              </ElementWrapper>
            )}
            {this.props.showDatePicker && (
              <ElementWrapper>
                {this.props.showToolbarLabels && (
                  <Label htmlFor={'datepicker'} text={'Date'} />
                )}
                <DatePicker
                  name="datepicker"
                  isRangePicker={true}
                  onChange={this.handleDateChange}
                  since={this.props.since}
                  until={this.props.until}
                  outline={isToolbarOutlineTheme}
                />
              </ElementWrapper>
            )}

            {this.props.showLimit && (
              <ElementWrapper wrapperType={'limit'}>
                <LimitWrap>
                  {/* <span style={{ marginRight: 8 }}>Show:</span>{' '} */}
                  <Select
                    label={this.props.showToolbarLabels ? 'Show' : ''}
                    name={'limit'}
                    onChange={this.handleLimitChange}
                    outline={isToolbarOutlineTheme}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </Select>
                </LimitWrap>
              </ElementWrapper>
            )}

            {this.props.showCustomSelect && (
              <ElementWrapper wrapperType={'select'}>
                <CustomSelectWrap>
                  <Select
                    label={
                      this.props.showToolbarLabels ? this.props.selectLabel : ''
                    }
                    name={'customSelect'}
                    onChange={this.handleSelectChange}
                    value={this.props.selectValue}
                    outline={isToolbarOutlineTheme}
                  >
                    {this.props.selectList.map((option, i) => {
                      return (
                        <option
                          key={option.key ? option.key : i}
                          value={option.value}
                        >
                          {option.text}
                        </option>
                      )
                    })}
                  </Select>
                </CustomSelectWrap>
              </ElementWrapper>
            )}
          </Controls>
        </ControlsContainer>
        <TableWrapper>
          <StyledTable>
            {this.renderHead()}

            <tbody>{this.renderData()}</tbody>
          </StyledTable>
        </TableWrapper>
        {this.props.showPagination && (
          <PaginationContainer paginationCss={this.props.paginationCss}>
            <PaginationWrap>
              <Pagination
                page={this.props.page}
                pageCount={this.props.pageCount}
                onClick={this.handleUpdatePage}
                showEllipses={true}
                palette={this.props.paginationTheme}
              />
            </PaginationWrap>
          </PaginationContainer>
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
  /** theme for pagination components */
  paginationTheme?: 'outline' | 'fill'
  /** whether or not to render search input */
  showSearch?: boolean
  /** search input current value */
  term?: string
  /** called when search input is updated */
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** boolean can clear seach */
  canClearSearch?: boolean
  /** called when search input is cleared */
  onClearSearch?: (value: null | undefined) => void
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
  /** whether or not to show a custom select filter */
  showCustomSelect?: boolean
  /** custom select label */
  selectLabel?: string
  /** called when custom select option is clicked */
  onSelectChange: (e?: React.ChangeEvent<HTMLSelectElement>) => void
  /** dropdown list */
  selectList?: Array<{ key?: string; text: string; value: string }>
  /** value shown in select dropdown */
  selectValue?: any
  /** show toolbar labels */
  showToolbarLabels?: boolean
  /** toolbar theming */
  toolbarTheme?: 'outline' | 'fill'
  /** controls container css */
  controlsCss?: FlattenSimpleInterpolation | FlattenInterpolation<any>
  /** pagination container css */
  paginationCss?: FlattenSimpleInterpolation | FlattenInterpolation<any>
}

const StyledTable = styled.table`
  width: 100%;
  table {
    width: 100%;
  }
`

// Styled Components -----
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #222;
`

const ControlsContainer = styled.div<{
  controlsCss: FlattenSimpleInterpolation | FlattenInterpolation<any>
}>`
  border-bottom: none;
  :hover {
    background-color: initial;
  }
  ${({ controlsCss }) => controlsCss}
`

const PaginationContainer = styled.div<{
  paginationCss: FlattenSimpleInterpolation | FlattenInterpolation<any>
}>`
  border-bottom: none;
  :hover {
    background-color: initial;
  }
  ${({ paginationCss }) => paginationCss}
`

const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`
const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`
const ElementWrapper = styled.div<{
  wrapperType?: 'limit' | 'select' | 'standard'
}>`
  ${({ wrapperType }) => `
  flex: 1;
  width: 100%;
  margin: 8px 8px 0 8px;
  ${
    wrapperType === 'limit'
      ? `
    flex: 0 1 80px;
  `
      : ``
  }
  ${
    wrapperType === 'select'
      ? `
    flex: 0 1 256px;
`
      : ``
  }
`}
`
ElementWrapper.defaultProps = {
  wrapperType: 'standard',
}

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
`

const CustomSelectWrap = styled(LimitWrap)``

const tableInputCss = css`
  min-width: 256px;
`

const toolbarCss = css``

const toolbarCellCss = css`
  padding: 0;
`
export default Table
