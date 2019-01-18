```javascript
initialState = { shouldShow: false }
;<div>
<Modal 
  onOuterClick={() => setState({ shouldShow: !state.shouldShow })}
  style={{background: 'rgba(0,0,0,.7)'}}
  shouldShow={state.shouldShow}
>
  <ErrorModal 
    title={'Dun goofed'} 
    message={'If you are seeing this, it means you need to get gud'}
    onClick={() => setState({ shouldShow: !state.shouldShow })}
  />
</Modal>
<Button.Main onClick={() => setState({ shouldShow: !state.shouldShow })}>Click To Show</Button.Main>
</div>

```