import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import FormElementWrapper from '../FormElementWrapper/FormElementWrapper'
import { IconIOS } from '../Icon'

/**
 * Select Component
 * @since v1.0.0
 * @author Tracey King
 */
const Select = (props: ISelectProps) => (
  <FormElementWrapper
    label={props.label}
    name={props.name}
    errorMessage={props.errorMessage}
    css={['width: 100%']}
  >
    <Wrapper css={props.css} errorMessage={props.errorMessage}>
      <StyledSelect
        name={props.name}
        onClick={props.onClick}
        onChange={(e?: React.ChangeEvent<HTMLSelectElement>) => props.onChange(e)}
      >
        {props.children}
      </StyledSelect>
      <IconIOS name={'arrow-down'} css={iconStyles} />
    </Wrapper>
  </FormElementWrapper>
)

const Wrapper = styled.div<{
  css?: FlattenSimpleInterpolation
  errorMessage?: string
}>`
  border: 1px solid white;
  border-radius: 4px;
  position: relative;
  ${({ errorMessage }) =>
    errorMessage &&
    `
    border-color: red;
    select, i {
      color: red;
    }
  `};

  ${props => props.css}
`

const StyledSelect = styled.select`
  background: transparent;
  color: white;
  height: 40px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  text-indent: 15px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`

const iconStyles = css`
  color: white;
  position: absolute;
  right: 15px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`
/**
 * Select prop interface
 */
interface ISelectProps {
  /** Children must be HTMLOptionElements */
  children?: Array<React.ReactElement<HTMLOptionElement>>
  /** CSS styling using css from styled-components */
  css?: FlattenSimpleInterpolation
  /** Label text */
  label?: string
  /** Error message */
  errorMessage?: string
  /** Name of select */
  name: string
  /** Fired on click */
  onClick?: () => void
  onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void
  /** called when input changes */
  value?: string | number
}

export default Select
