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
<div style={{ display: 'flex' }}>
  <Button.Main
    onClick={toggleClick}
    value={state.isClicked}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.Main>
  <Button.Secondary
    onClick={toggleClick}
    value={state.isClicked}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.Secondary>
  <Button.Danger
    onClick={toggleClick}
    value={state.isClicked}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.Danger>
  <Button.MainInverse
    onClick={toggleClick}
    value={state.isClicked}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.MainInverse>
  </div>

```