```js
initialState = { shouldShow: false }
;<div>
<Modal 
  onOuterClick={() => setState({ shouldShow: !state.shouldShow })}
  shouldShow={state.shouldShow}>
    <div style={{height: 100, background: 'black', color: 'white', padding: 20}}>
      <h1>Hello</h1>
      <Button onClick={alert}>Click</Button>
    </div>
</Modal>
<br />
<Button onClick={() => setState({ shouldShow: !state.shouldShow })}>Click</Button>
</div>
```