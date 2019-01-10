import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Themer, { theme } from '../../src/theme'
import App from './App'

import 'ionicons/dist/css/ionicons.css'

ReactDOM.render(
  <Themer theme={theme}>
    <App />
  </Themer>,
  document.querySelector('#root'),
)
