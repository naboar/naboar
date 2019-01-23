#### Example

```js
<Tabs onChange={console.log}>
  <TabItem key={0} title={"Item One"}>
    <div style={{ padding: 20 }}>I am a tab 1</div>
  </TabItem>
  <TabItem key={1} title={"Item Two"}>
    <div style={{ padding: 20 }}>I am a tab 2</div>
  </TabItem>
  <TabItem key={2} isDisabled title={"Item Three"}>
    <div style={{ padding: 20 }}>I am a tab 3</div>
  </TabItem>
  <TabItem key={3} title={"Item Four"}>
    <div style={{ padding: 20 }}>I am a tab 4</div>
  </TabItem>
</Tabs>
```