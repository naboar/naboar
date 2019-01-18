```js
  initialState = {
    isClicked: false
  }

  const toggleClick = (e) => {
    setState({
      isClicked: !state.isClicked
    })
    console.log(`${state.isClicked} ${e.target.value}`)
  }
<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <Button.Main
    onClick={toggleClick}
    value={1}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.Main>
  <Button.Secondary
    onClick={toggleClick}
    value={2}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.Secondary>
  <Button.Danger
    onClick={toggleClick}
    value={3}
    disabled={false}
    type={'button'}
  >
    {state.isClicked ? 'You clicked me!' : 'Click me!'}
  </Button.Danger>
  </div>

```