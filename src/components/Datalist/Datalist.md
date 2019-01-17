#### Example: 

```js
initialState = {
  value: ''
};

const handleInput = (e) => {
  setState({
    value: e.target.value,
  })
};

const handleClearInput = () => {
  setState({
    value: '',
  })
};

const example = ['Chocolate','Coconut','Mint','Strawberry','Vanilla'];

  <>
    <Datalist.Input 
      type={'input'} 
      canClear={true} 
      list={'example'} 
      onChange={handleInput} 
      onClear={handleClearInput}
      value={state.value}
      label={'Datalist Example'}
      errorMessage={!state.value && 'error message here...'}
    />
    <Datalist
      id={'example'}
    >
      {example.map((value,i) => (
        <Datalist.Option
          key={i}
          value={value}
        >
        {value}
        </Datalist.Option>
      ))}
    </Datalist>
  </>


```

