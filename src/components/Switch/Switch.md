```javascript
initialState = { isOn: false };
  <Switch 
  isOn={ state.isOn } 
  onClick={() => setState({ isOn: !state.isOn})}
  />

```