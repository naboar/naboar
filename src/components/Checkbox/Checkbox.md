#### Example: 

```js
initialState = {
  checked: false
}
;

<>
<Checkbox 
  checked={state.checked} 
  onChange={(checked) => setState({ checked })}
/>
<Checkbox disabled/>
</>
```