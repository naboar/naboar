#### ICell
```ts
interface ICell {
  key: string
  heading?: string
  /** Function that returns your own custom <Th /> */
  renderHeading?: (
    heading: string,
    index?: number,
    col?: ICell,
  ) => ReactElement<any>
  /** Function that returns your own custom <Td /> */
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
```

#### Example

```js
const fakeData = { isChecked: false, 1: "test", 2: "test", 3: "test", 4: "test", 5: "test" }

initialState = {
  sort: "",
  order: "",

  page: 1,
  pageCount: 100,

  term: "",

  limit: 10,

  columns: [
    {key: "isChecked", heading: "headerTest"},
    {key: "1", heading: "headerTest"},
    {key: "2", heading: "headerTest"},
    {key: "3", heading: "headerTest"},
    {key: "4", heading: "headerTest"},
    {key: "5", heading: "headerTest"},
  ],
  data: [fakeData, fakeData, fakeData, fakeData]
}

// Helpers for updating state ---
const check = (obj) => ({ ...obj, isChecked: true })
const unCheck = (obj) => ({ ...obj, isChecked: false })
const handleCheckbox = (val, cellIndex) =>
  setState({
    data: state.data.map((item, i) =>
      i === cellIndex ? (item.isChecked ? unCheck(item) : check(item)) : item,
    ),
  })
const handleAllCheckboxes = () =>
  state.data.some(item => item.isChecked)
   ? setState({ data: state.data.map(unCheck) })
   : setState({ data: state.data.map(check) })
;

<Table 
  columns={state.columns}
  data={state.data}
  onAllCheckboxes={handleAllCheckboxes}
  onCheckbox={handleCheckbox}
  onRowClick={console.log}

  sort={state.sort} 
  order={state.order}
  onSort={(sort, order) => setState({ sort, order })}

  showPagination
  page={state.page}
  pageCount={state.pageCount}
  onUpdatePage={page => setState({ page })}

  showSearch
  term={state.term}
  onSearchChange={(term) => setState({ term })}

  showDatePicker
  onDateChange={(since, until) => setState({ since, until })}

  showLimit
  limit={state.limit}
  onLimitChange={(limit) => setState({ limit })}
/>
```
