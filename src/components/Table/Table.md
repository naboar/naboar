#### Example

```js
initialState = {
  sort: "",
  order: "",
  page: 1,
  pageCount: 100,
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
/>
```
