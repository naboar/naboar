```js
initialState = { notifs: [] }
const removeAtIndex = (i, arr) => arr[i] ? [...arr.slice(0, i), ...arr.slice(i + 1)] : arr
;<div>

<Notifications 
  native
  notifications={state.notifs}
  onClick={(e, i) => alert(`Notfi ${i} clicked`)}
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