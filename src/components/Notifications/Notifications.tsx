import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import Fade from '../../effects/Fade'
import { IconIOS } from '../Icon'

const PERMISSION = {
  DEFAULT: 'default',
  DENIED: 'denied',
  GRANTED: 'granted',
}

/**
 * Notifications Component
 *
 * - Ask for push notifications permission
 * - If permission granted use native notifications
 * - If not use a custom in browser solution ones
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
    if (this.props.native) {
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
  }

  componentDidUpdate(prevProps: IProps) {
    const prev = prevProps.notifications
    const next = this.props.notifications

    const newNotifs = next.filter(val => prev.indexOf(val) === -1)

    // Add (notifs.length) to doc title
    const title = document.title.replace(/\s*\(.*?\)\s*/g, '')
    document.title =
      this.props.notifications.length > 0
        ? `(${this.props.notifications.length}) ${title}`
        : title

    newNotifs.forEach(this.notify)
  }

  /**
   * Generate and emit either a native or in browser notification
   */
  notify = (notif: INotification) => {
    if (
      !Notification ||
      this.state.permission !== PERMISSION.GRANTED ||
      !this.props.native
    ) {
      return
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

  /**
   * Called when clicking an in app notification
   */
  onClick = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    if (!this.props.onClick) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    this.props.onClick(e, i)
  }

  /**
   * Called when closing the in app notification
   */
  onClose = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    if (!this.props.onClose) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    this.props.onClose(e, i)
  }

  renderWrapper = () => {
    return (
      <Wrapper canClick={this.props.notifications.length > 0}>
        {this.props.notifications.map((notif, i) => (
          <Fade key={'notif' + i} shouldShow={true} from="right" distance={100}>
            <StyledNotification onClick={e => this.onClick(e, i)}>
              {this.props.onClose && (
                <CloseButton onClick={e => this.onClose(e, i)}>
                  <IconIOS name="close" size={24} color={'white'} />
                </CloseButton>
              )}
              <Title>{notif.title}</Title>
              <Body>{notif.body}</Body>
            </StyledNotification>
          </Fade>
        ))}
      </Wrapper>
    )
  }
  render() {
    return this.renderWrapper()
  }
}

// Types -----

/** Notification interface */
export interface INotification {
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
  /** Use Native push notifs */
  native?: boolean
  /**  Array of INotification[] */
  notifications: INotification[]
  /** Called when close button is clicked */
  onClose?: (
    e?: Event | React.MouseEvent<HTMLButtonElement>,
    i?: number,
  ) => void
  /** Called when notif is clicked */
  onClick?: (e?: Event | React.MouseEvent<HTMLDivElement>, i?: number) => void
  /** Called when error making notif */
  onError?: (e?: Event) => void
}

interface IState {
  permission: string
}

// Styled Components -----

const Wrapper = styled.div<{ canClick: boolean }>`
  display: inline-block;
  font-family: Open-Sans, sans-serif;
  position: fixed;
  z-index: 10;
  width: 400px;
  max-width: calc(100vw - 32px);
  right: 0;
  top: 0;
  bottom: auto;
  height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  ${({ canClick }) => !canClick && `pointer-events: none;`}
  > div {
    width: 100%;
    @media (min-width: 390px) {
      max-width: 380px;
    }
  }
`

const StyledNotification = styled.div`
  transition: box-shadow 0.2s;
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #444;
  color: white;
  line-height: 1.5;
  position: relative;
  overflow: hidden;
  margin: 0 24px 16px 8px;
  :hover {
    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h2`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 8px;
  line-height: 24px;
  display: inline-block;
`

const Body = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 16px;
`

const CloseButton = styled.button`
  transition: background 0.2s;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  font-weight: bold;
  padding: 0px 11px 9px 11px;
  border: none;
  cursor: pointer;
  :hover {
    background: #555;
  }
`

export default Notifications
