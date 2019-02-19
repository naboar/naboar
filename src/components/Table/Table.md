##### IObj
```ts
interface IObj {
  [key: string]: any
}
```

##### ICell
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
    data?: Obj[],
    col?: ICell,
  ) => ReactElement<any>
  onClick?: (...args: any[]) => void
  isChecked?: boolean | null | undefined
  isSortable?: boolean
}
```

#### Example

```js
const Th = require('./Components/Th')
const Td = require('./Components/Td')
const fakeData = { isChecked: false, 1: "test", 2: "test", 3: "test", 4: "test", 5: "test",6: "test",7: "test" }

initialState = {
  sort: "",
  order: "",

  page: 1,
  pageCount: 100,

  term: "",

  limit: 10,

  columns: [
    {key: "isChecked", heading: "headerTest"},
    {key: "1", heading: "headerTest",},
    {key: "2", heading: "headerTest"},
    {key: "3", heading: "headerTest"},
    {key: "4", heading: "headerTest"},
    {key: "5", heading: "headerTest"},
    {key: "6", heading: "headerTest"},
    {key: "7", heading: "headerTest"},
  ],
  data: [fakeData, fakeData, fakeData, fakeData],
  selectValue: undefined,
  isPaginationLight: false,
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

const togglePageTheme = () => setState({isPaginationLight: !state.isPaginationLight});

<>
<div>
<h1 style={{ margin: '0 0 8px', color: 'white', fontSize: 16 }}>
  Basic Usage:
</h1>

<Table 
  columns={state.columns}
  data={state.data}
  onAllCheckboxes={handleAllCheckboxes}
  onCheckbox={handleCheckbox}
  onRowClick={console.log}
/>
</div>
<div>
<h1 style={{ margin: '24px 0 8px', color: 'white', fontSize: 16 }}>
  With Controls:
</h1>
<div><button onClick={togglePageTheme}>Click to toggle pagination theme </button></div>
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
  paginationTheme={state.isPaginationLight ? 'light' : undefined}

  showSearch
  term={state.term}
  onSearchChange={(term) => setState({ term })}

  showDatePicker
  onDateChange={(since, until) => setState({ since, until })}

  showLimit
  limit={state.limit}
  onLimitChange={(limit) => setState({ limit })}

  showCustomSelect
  onSelectChange={(e)=> setState({selectValue: e.target.value})}
  selectLabel={'Custom List:'}
  selectValue={state.selectValue}
  selectList={[{text: 'option 1', value: '1'},{text: 'option 2', value: '2'}]}
/>
</div>
</>
```
