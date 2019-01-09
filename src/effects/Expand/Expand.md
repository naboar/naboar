```js
initialState = { isExpanded: false }
;<div>
<Expand isExpanded={state.isExpanded} from={0} to={200}>
    <div style={{height: 100, background: 'white', color: 'black'}}>
      <h1>Hello</h1>
    </div>
</Expand>
<br />
<Expand vertical={true} isExpanded={state.isExpanded} from={0} to={100}>
    <div style={{height: 100, background: 'white', color: 'black'}}>
      <h1>Hello</h1>
    </div>
</Expand>
<br />
<Button onClick={() => setState({ isExpanded: !state.isExpanded })}>Click To Expand</Button>
</div>
```