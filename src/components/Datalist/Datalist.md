#### Example: 

```js
class DatalistExample extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClearInput = this.handleClearInput.bind(this)
  }

  handleInput(e){
    this.setState({
      value: e.target.value,
      })
  }

  handleClearInput(){
    this.setState({
      value: '',
    })
  }
  render() {
    const example = ['Chocolate','Coconut','Mint','Strawberry','Vanilla']
    return (
      <>
        <Datalist.Input 
          type={'input'} 
          canClear={true} 
          list={'example'} 
          onChange={this.handleInput} 
          onClear={this.handleClearInput}
          value={this.state.value}
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
    )
  }
};<DatalistExample />

```

