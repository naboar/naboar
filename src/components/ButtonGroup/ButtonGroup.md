```js
initialState = {
  activeValue: null,
  isClicked: false
};
// generate 5 buttons with index in the value and text

  handleOnChange = (value,index,event) => {
    console.log(value,index,event)
    setState({
      activeValue: Number(value)
    })
  }

  toggleClick = (e) => {
    setState({
      isClicked: !state.isClicked,
      activeValue: Number(e.target.value)
    })
    console.log(`${state.isClicked} ${e.target.value}`)
  }

  <ButtonGroup
    activeValue={state.activeValue}
    onChange={handleOnChange}
  >
    <Button.Main
      onClick={toggleClick}
      value={1}
      disabled={false}
      type={'submit'}
      isActive={state.activeValue === 1}
    >
      {state.activeValue === 1 ? 'You clicked me!' : 'Click me!'}
    </Button.Main>
    <Button.Main
      onClick={toggleClick}
      value={2}
      disabled={false}
      type={'submit'}
      isActive={state.activeValue === 2}
    >
      {state.activeValue === 2 ? 'You clicked me!' : 'Click me!'}
    </Button.Main>
    <Button.Danger
      onClick={toggleClick}
      value={3}
      disabled={false}
      type={'submit'}
      isActive={state.activeValue === 3}
    >
      {state.activeValue === 3 ? 'You clicked me!' : 'Click me!'}
    </Button.Danger>
  </ButtonGroup>
```