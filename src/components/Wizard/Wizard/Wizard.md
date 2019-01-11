```js
initialState = { val: '', val2: '' }
;
<Wizard 
  validation={{
    "step-1": [state.val.length > 3],
    "step-2": [state.val2.length > 3],
  }}>
  <WizardStep name="step-1" title="Do some stuff 1">
    <div>
      <Input
        iconName="checkbox-outline"
        placeholder="Fill me in to validate" 
        value={state.val} 
        onChange={({target}) => setState({val: target.value})} 
      />
    </div>
  </WizardStep>
  <WizardStep name="step-2" title="Do some stuff 2">
    <div>
      <Input
        iconName="checkbox-outline"
        placeholder="Fill me in to validate" 
        value={state.val2} 
        onChange={({target}) => setState({val2: target.value})} 
      />
    </div>
  </WizardStep>
  <WizardStep hideTitle name="review" title="Review">
    <div>
      Value 1: {state.val}
      <br />
      Value 2: {state.val2}
    </div>
  </WizardStep>
</Wizard>
```