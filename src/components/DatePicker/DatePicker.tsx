import { format, isAfter, isBefore } from 'date-fns'
import { IFormElementProps } from '../../interfaces/IFormElementProps'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
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
   * Check whether or not the selected date overlaps the current date
   * if so flip them, if not set the state and call the onChange
   */
  handleChangeDate = (
    val: 'since' | 'until',
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedDate = e.target.value
    const oppositeDate = val === 'since' ? 'until' : 'since'
    const shouldFlipDates =
      val === 'since'
        ? isAfter(selectedDate, this.state[oppositeDate])
        : isBefore(selectedDate, this.state[oppositeDate])

    if (shouldFlipDates) {
      this.setState({
        [val]: this.state[oppositeDate],
        [oppositeDate]: selectedDate,
      })
    } else {
      this.setState({ [val]: selectedDate }, this.onDateChange)
    }
  }

  /**
   * Call props.onChange with updated state vars
   */
  onDateChange = () => {
    const dateSince = new Date(this.state.since)
    const dateUntil = new Date(this.state.until)

    this.props.onChange(
      this.state.since ? dateSince : null,
      this.state.until ? dateUntil : null,
    )
  }

  render() {
    const {
      errorMessage,
      isRangePicker,
      isTimePicker,
      label,
      sinceRequired,
      untilRequired,
      sinceName,
      untilName,
      outline,
    } = this.props
    const { since, until } = this.state
    return (
      <Wrapper className={'datePicker'}>
        <Input
          label={label}
          errorMessage={errorMessage}
          value={String(since)}
          onChange={e => this.handleChangeDate('since', e)}
          css={inputCss}
          name={sinceName}
          iconName="calendar"
          type={isTimePicker ? 'datetime-local' : 'date'}
          required={sinceRequired}
          outline={outline}
        />
        {isRangePicker && (
          <Fragment>
            <IconIOS.White css={iconCss} size={24} name="remove" />
            <Input
              value={String(until)}
              onChange={e => this.handleChangeDate('until', e)}
              css={inputCss}
              name={untilName}
              iconName="calendar"
              type={isTimePicker ? 'datetime-local' : 'date'}
              required={untilRequired}
              outline={outline}
            />
          </Fragment>
        )}
      </Wrapper>
    )
  }
}

// Types
interface IProps extends IFormElementProps, IStyledComponentProps {
  /** does it have a since and until */
  isRangePicker?: boolean
  /** Can the user select a time */
  isTimePicker?: boolean
  /** Date object for since or single date */
  since?: Date
  /** Date object for until */
  until?: Date
  /** function called when any date is changed */
  onChange: (since: Date, until?: Date) => void
  /** is since required */
  sinceRequired?: boolean
  /** is until required */
  untilRequired?: boolean
  /** override default since name */
  sinceName: string
  /** override default until name */
  untilName: string
  /** should inputs be outline */
  outline?: boolean
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
