```js
initialState = {
  text: ''
};
<div>
  <Textarea placeholder={'Testing'} css={['margin-bottom: 20px;']} name={'textarea'} onChange={(e) => console.log(e.target.value)}/>
  <Textarea 
    errorMessage={state.text ? '' : 'Please enter a description'}
    label={'Description'}
    name={'textarea'} 
    onChange={(e) => setState({ text: e.target.value})}/>
  </div>
```