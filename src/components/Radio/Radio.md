#### Example: 

```js
initialState = {
  value: 'one'
}
;

<>
<Radio 
  value={'one'} 
  checked={state.value === 'one'}
  onChange={(value) => setState({ value })}
/>{" "}
<Radio 
  value={'two'} 
  checked={state.value === 'two'}
  onChange={(value) => setState({ value })}
/>{" "}
<Radio 
  value={'three'} 
  disabled
  checked={state.value === 'three'}
  onChange={(value) => setState({ value })}
/>
<Radio 
  value={'four'} 
  checked={state.value === 'four'}
  onChange={(value) => setState({ value })}
/>
</>
```
