import React, { ChangeEvent, Component } from 'react'
import styled, { css } from 'styled-components'
import { IconIOS, Input } from '../..'
import { isAfter, isBefore } from 'date-fns'

/**
 * DatePicker Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda)
 */
class DatePicker extends Component<IProps> {
  state = {
    since: this.props.since || '',
    until: this.props.until || '',
  }

  /**
   * Check whether or not the selected since is after the since
   * if so flip them, if not set the state and call the onChange
   */
  handleSinceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const since = e.target.value
    if (isAfter(since, this.state.until)) {
      this.setState({ since: this.state.until, until: since })
    } else {
      this.setState({ since }, this.onDateChange)
    }
  }

  /**
   * Check whether or not the selected until is before the since
   * if so flip them, if not set the state and call the onChange
   */
  handleUntilChange = (e: ChangeEvent<HTMLInputElement>) => {
    const until = e.target.value
    if (isBefore(until, this.state.since)) {
      this.setState({ since: until, until: this.state.since })
    } else {
      this.setState({ until }, this.onDateChange)
    }
  }

  /**
   * Call props.onChange
   */
  onDateChange = () => {
    this.props.onChange({
      since: this.state.since ? new Date(this.state.since) : null,
      until: this.state.until ? new Date(this.state.until) : null,
    })
  }

  render() {
    return (
      <Wrapper>
        <Input
          value={String(this.state.since)}
          onChange={this.handleSinceChange}
          css={inputCss}
          name="since"
          iconName="calendar"
          type="date"
        />
        <IconIOS css={iconCss} size={24} color="white" name="remove" />
        <Input
          value={String(this.state.until)}
          onChange={this.handleUntilChange}
          css={inputCss}
          name="until"
          iconName="calendar"
          type="date"
        />
      </Wrapper>
    )
  }
}

// Types
interface IProps {
  /** does it have a since and until */
  isRangePicker?: boolean
  /** Can the user select a time */
  isTimePicker?: boolean
  /** TODO */
  since?: Date
  /** TODO */
  until?: Date
  /** function called when any date is changed */
  onChange: (dates: { since: Date; until: Date }) => void
}

// Styled Components
const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`
const iconCss = css`
  margin: 0 8px;
`
const inputCss = css`
  padding: 0 0 0 16px;
`

export default DatePicker
