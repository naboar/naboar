```js
initialState = {
  text: '',
  emailText: '',
  errorMessage: 'Please enter an email address'
};
<div>
<Input css={['margin-bottom: 10px;']} type="number" min={34} max={50}/>
<Input css={['margin-bottom: 10px']} canClear name="test" onFocus={(e) => console.log(e.target.name)} />
<Input css={['margin-bottom: 10px']} name="name" iconName="person" />
<Input 
  canClear={true} 
  name={"example"}
  iconName={"mail"}
  value={state.text}
  onChange={e => setState({ 
    text: e.target.value
  })}
  onClear={() => setState({
    text: '',
  })} 
/>
<Input 
  label="Email Address" 
  errorMessage={state.errorMessage}
  canClear={true}
  name={"email"} 
  iconName={"mail"} 
  value={state.emailText}
  onChange={e => setState({ 
    emailText: e.target.value,
    errorMessage: e.target.value ? '' : 'Please enter an email address'
  })}
  onClear={() => setState({
    emailText: '',
    errorMessage: 'Please enter an email address'
  })} 
/>
  </div>
```
