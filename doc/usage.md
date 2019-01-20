install these peer deps.

```json
"peerDependencies": {
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "styled-components": "^4.1.3"
  }
```

Install the components

```npm install --save naboar```

Wrap app in Themer, and pass it an optional theme object with overrides to the default theme.

The default theme is found [here](https://github.com/naboar/naboar/blob/master/src/theme/index.tsx)

```ts
import { Themer } from 'naboar'

function App() {
  return (
    <Themer theme={yourTheme}>
      {/* your app here */}
    </Themer>
  )
}
```