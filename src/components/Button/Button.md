```js
  initialState = {
    isClicked: false
  }

  const toggleClick = () => {
    setState({
      isClicked: !state.isClicked
    })
    console.log(state.isClicked)
  }

  <Button
    onClick={toggleClick}
    value={state.isClicked}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button>

```