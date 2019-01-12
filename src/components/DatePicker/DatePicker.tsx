import { format, isAfter, isBefore } from 'date-fns'
import React, { ChangeEvent, Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { IconIOS, Input } from '../..'

/**
 * DatePicker Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda)
 */
class DatePicker extends Component<IProps> {
  static defaultProps = {
    onChange: (): void => null,
    sinceName: 'since',
    untilName: 'until',
  }

  state = {
    since: '',
    until: '',
  }

  componentDidMount() {
    this.setState({
      since: this.props.since ? this.formatDate(this.props.since) : '',
      until: this.props.until ? this.formatDate(this.props.until) : '',
    })
  }

  componentDidUpdate(prevProps: IProps) {
    const { since, until } = this.props
    if (since !== prevProps.since || until !== prevProps.until) {
      this.setState({
        since: this.formatDate(since),
        until: this.formatDate(until),
      })
    }
  }

  /** Format dates to datepicker accepting string */
  formatDate = (date: string | Date | number): string =>
    format(date, this.props.isTimePicker ? 'YYYY-MM-DDTHH:mm' : 'YYYY-MM-DD')

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
    const dateSince = new Date(this.state.since)
    const dateUntil = new Date(this.state.until)

    if (this.props.isRangePicker) {
      this.props.onChange({
        since: this.state.since ? dateSince : null,
        until: this.state.until ? dateUntil : null,
      })
    } else {
      this.props.onChange(dateSince)
    }
  }

  render() {
    const {
      isRangePicker,
      isTimePicker,
      sinceRequired,
      untilRequired,
      sinceName,
      untilName,
    } = this.props
    const { since, until } = this.state
    return (
      <Wrapper>
        <Input
          value={String(since)}
          onChange={this.handleSinceChange}
          css={inputCss}
          name={sinceName}
          iconName="calendar"
          type={isTimePicker ? 'datetime-local' : 'date'}
          required={sinceRequired}
        />
        {isRangePicker && (
          <Fragment>
            <IconIOS css={iconCss} size={24} color="white" name="remove" />
            <Input
              value={String(until)}
              onChange={this.handleUntilChange}
              css={inputCss}
              name={untilName}
              iconName="calendar"
              type={isTimePicker ? 'datetime-local' : 'date'}
              required={untilRequired}
            />
          </Fragment>
        )}
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
  /** Date object for since or single date */
  since?: Date
  /** Date object for until */
  until?: Date
  /** function called when any date is changed */
  onChange: (dates?: { since: Date; until: Date } | Date) => void
  /** is since required */
  sinceRequired?: boolean
  /** is until required */
  untilRequired?: boolean
  /** override default since name */
  sinceName: string
  /** override default until name */
  untilName: string
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
