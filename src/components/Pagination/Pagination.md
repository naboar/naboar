#### Example

```js
initialState = { page: 1 }
;
<Pagination 
  pageCount={10} 
  showEllipses 
  page={state.page}
  onClick={page => setState({ page })}
/>
```