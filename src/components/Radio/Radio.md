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
  onClick={(value) => setState({ value })}
/>{" "}
<Radio 
  value={'two'} 
  checked={state.value === 'two'}
  onClick={(value) => setState({ value })}
/>{" "}
<Radio 
  value={'three'} 
  disabled
  checked={state.value === 'three'}
  onClick={(value) => setState({ value })}
/>
<Radio 
  value={'four'} 
  checked={state.value === 'four'}
  onClick={(value) => setState({ value })}
/>
</>
```
