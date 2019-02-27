```js
initialState = {
  text: ''
};
<div>
  <Textarea placeholder={'Testing'} name={'textarea'} onChange={(e) => console.log(e.target.value)}/>
  <Textarea 
    rows={10}
    errorMessage={state.text ? '' : 'Please enter a description'}
    placeholder={'placeholder text'}
    label={'Description'}
    name={'textarea'} 
    onChange={(e) => setState({ text: e.target.value})}/>
  </div>
```