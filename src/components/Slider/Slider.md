```js
initialState = { val1: 0, val2: 0 }
;
<div>

{/** Default **/}
<Slider 
  value={state.val1}
  onChange={val => setState({ val1: val })}
/>

<p style={{ margin: '20px 0', color: 'white' }}>Value: {state.val1}</p>

{/** Max 50, 5 step **/}
<Slider 
  value={state.val2}
  onChange={val => setState({ val2: val })}
  max={50}
  step={5}
/>

<p style={{ margin: '10px 0', color: 'white' }}>Value: {state.val2}</p>
</div>
```