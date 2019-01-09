import React, { Component } from 'react'
import styled from 'styled-components'

const PERMISSION = {
  DEFAULT: 'default',
  DENIED: 'denied',
  GRANTED: 'granted',
}

/**
 * Notifications Component
 *
 * Ask for push notifications permission,
 * if it's granted use native notificationss,
 * if not use a custom in browser solution ones.
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class Notifications extends Component<IProps> {
  state = {
    permission: PERMISSION.DENIED,
  }
  render() {
    return <Wrapper />
  }
}

/** Notifications props ionterface */
interface IProps {
  data: []
}

const Wrapper = styled.div``

export default Notifications
