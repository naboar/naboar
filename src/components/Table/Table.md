#### Example
```ts
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
```

```js
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
  data: []
}
;

<Table 
  columns={state.columns}
  data={state.data}

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
