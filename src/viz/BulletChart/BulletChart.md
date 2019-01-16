#### Example:

```js
const scale = [
  {
    color: 'rgba(255, 0, 0, .2)',
    borderColor: 'rgba(255, 0, 0, .25)',
    amount: 50,
  },
  {
    color: 'rgba(255, 255, 0, .2)',
    borderColor: 'rgba(255, 255, 0, .25)',
    amount: 70,
  },
  {
    color: 'rgba(0, 255, 0, .2)',
    borderColor: 'rgba(0, 255, 0, .25)',
    amount: 90,
  },
]

const scale2 = [
  {
    color: 'red',
    amount: 50,
  },
  {
    color: 'yellow',
    amount: 60,
  },
  {
    color: 'green',
    amount: 70,
  },
  {
    color: 'blue',
    amount: 80,
  },
  {
    color: 'purple',
    amount: 90,
  },
]

const scale3 = [
  {
    color: '#555',
    amount: 50,
  },
  {
    color: '#999',
    amount: 70,
  },
  {
    color: '#fff',
    amount: 150,
  },
]
;
<>
<BulletChart 
  scale={scale}
  target={85}
  amount={90}
  amountColor={"rgba(255,255,255,.9)"}
  label={"Awesome"}
  metric={"% of awesome"}
/>
<br />
<BulletChart 
  scale={scale2}
  amount={90}
  amountColor={"black"}
  targetColor={"red"}
  label={"Rainbow"}
  metric={"colors"}
/>
<br />
<BulletChart 
  max={200}
  scaleTicks={10}
  scale={scale3}
  amount={130}
  amountColor={"rgba(0,0,0,.9)"}
  targetColor={"rgba(0,0,0,.9)"}
  label={"Greyscale"}
  metric={"Brightness"}
/>
</>
```