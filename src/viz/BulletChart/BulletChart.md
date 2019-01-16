#### Example:

```js
const scale = [
  {
    color: 'rgba(255, 0, 0, .1)',
    borderColor: 'red',
    amount: 50
  },
  {
    color: 'rgba(255, 255, 0, .1)',
    borderColor: 'yellow',
    amount: 70
  },
  {
    color: 'rgba(0, 255, 0, .1)',
    borderColor: 'green',
    amount: 90
  },
]
;
<BulletChart 
  scale={scale}
  target={85}
  amount={90}
  amountColor={"rgba(255,255,255,.9)"}
  label={"Awesomeness"}
  metric={"% of awesome"}
/>
```