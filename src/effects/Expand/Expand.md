```js
initialState = { isExpanded: false }
;<div>
<Expand isExpanded={state.isExpanded} from={0} to={200}>
    <div style={{height: 100, background: 'black', color: 'white'}}>
      <h1>Hello</h1>
    </div>
</Expand>
<Expand vertical={true} isExpanded={state.isExpanded} from={0} to={100}>
    <div style={{height: 100, background: 'black', color: 'white'}}>
      <h1>Hello</h1>
    </div>
</Expand>
<Button onClick={() => setState({ isExpanded: !state.isExpanded })}>Click</Button>
</div>
```