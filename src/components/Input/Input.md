```js
<Input />
<Input canClear name="test" onFocus={(e) => console.log(e.target.name)} />
<Input iconName="open" />
<Input canClear iconName="T" onClear={() => alert("Cleared!")} />
```