#### Example

```js
initialState = { shouldShow: false }
;<div>


<Fade shouldShow={state.shouldShow} from={'left'} distance={30}>
    <div style={{height: 100, background: 'white', color: 'black'}}>
      <h1>From Left</h1>
    </div>
</Fade>


<br />


<Fade shouldShow={state.shouldShow} from={'right'} distance={30}>
    <div style={{height: 100, background: 'white', color: 'black'}}>
      <h1>From Right</h1>
    </div>
</Fade>


<br />
<Button onClick={() => setState({ shouldShow: !state.shouldShow })}>Click To Show</Button>
</div>
```