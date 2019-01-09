import React, { Component, ReactNode } from 'react'
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
class Notifications extends Component<IProps, IState> {
  state = {
    permission: PERMISSION.DEFAULT,
  }
  /** Call requestPermissions */
  componentDidMount() {
    this.requestPermissions()
  }
  /** Ask the user for permission to send push notifications */
  requestPermissions() {
    if (!Notification) {
      return
    }
    if (Notification.permission === PERMISSION.GRANTED) {
      return this.setState({ permission: PERMISSION.GRANTED })
    }
    if (Notification.permission === PERMISSION.DENIED) {
      return this.setState({ permission: PERMISSION.DENIED })
    }

    Notification.requestPermission().then(permission => {
      if (permission === PERMISSION.GRANTED) {
        this.setState({ permission: PERMISSION.GRANTED })
      }
    })
  }

  componentDidUpdate(prevProps: IProps) {
    const prev = prevProps.notifications
    const next = this.props.notifications

    const newNotifs = next.filter(val => prev.indexOf(val) === -1)

    newNotifs.forEach(this.notify)
  }

  notify = (notif: INotification) => {
    if (!Notification || this.state.permission !== PERMISSION.GRANTED) {
      // custom notif
    } else {
      const options = notif as NotificationOptions
      const n = new Notification(notif.title, { ...options })
      n.onclick = e => {
        e.preventDefault()
        if (this.props.onClick) {
          this.props.onClick(e)
        }
      }

      n.onclose = e => {
        e.preventDefault()
        if (this.props.onClose) {
          this.props.onClose(e)
        }
      }

      n.onerror = e => {
        e.preventDefault()
        if (this.props.onError) {
          this.props.onError(e)
        }
      }
    }
  }

  render() {
    return <Wrapper />
  }
}

/** Notification interface */
interface INotification {
  title: string
  body: string
  icon?: string
  image?: string
  badge?: string
  dir?: string
  lang?: string
  tag?: string
  timeout?: string
  data?: ReactNode
  vibrate?: ReactNode
  renotify?: boolean
  requireInteraction?: boolean
}

/** Notifications props interface */
interface IProps {
  notifications: INotification[]
  onClose?: (e?: Event) => void
  onClick?: (e?: Event) => void
  onError?: (e?: Event) => void
}

interface IState {
  permission: string
}

const Wrapper = styled.div``

export default Notifications
