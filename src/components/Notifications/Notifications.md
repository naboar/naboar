```js
initialState = { notifs: [] }
const removeAtIndex = (i, arr) => [...arr.slice(0, i), ...arr.slice(i + 1)]
;<div>

<Notifications 
  notifications={state.notifs}
  onClick={console.log}
  onClose={(e, i) => setState({ notifs: removeAtIndex(i, state.notifs)})}
/>


{/** Button generates notifs */}
<Button 
  onClick={() => setState({
    notifs: [
      ...state.notifs,
      { title: state.notifs.length + ' Notif', body: 'Testing some stuff' },
    ]})
  }>
  Click To Add
</Button>
</div>
```