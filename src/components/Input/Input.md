```js
<Input css={['margin-bottom: 10px;']} type="number" min={34} max={50}/>
<Input css={['margin-bottom: 10px']} canClear name="test" onFocus={(e) => console.log(e.target.name)} />
<Input css={['margin-bottom: 10px']} name="name" iconName="person" />
<Input canClear name="email" iconName="mail" onClear={() => alert("Cleared!")} />
```