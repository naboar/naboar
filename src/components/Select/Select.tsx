import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { IFormElementProps, IStyledComponentProps } from '../../interfaces'
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
        value={props.value}
        onChange={(e?: React.ChangeEvent<HTMLSelectElement>) =>
          props.onChange(e)
        }
      >
        {props.children}
      </StyledSelect>
      <IconIOS.White name={'arrow-down'} css={iconStyles} />
    </Wrapper>
  </FormElementWrapper>
)

const Wrapper = styled.div<{
  css?: FlattenSimpleInterpolation
  errorMessage?: string
}>`
  ${({ css, errorMessage, theme }) => `
    border-radius: ${theme.shape.borderRadius};
    background: ${theme.palette.secondary.light};
    position: relative;
    ${errorMessage && `
      background: ${theme.palette.common.red};
    `};

    ${css}
  `}
`

const StyledSelect = styled.select`
  background: transparent;
  color: ${({ theme }) => theme.palette.common.white};
  height: 40px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  text-indent: 16px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`

const iconStyles = [`
  color: white;
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`]
/**
 * Select prop interface
 */
interface ISelectProps extends IFormElementProps, IStyledComponentProps {
  /** Children must be HTMLOptionElements */
  children?: Array<React.ReactElement<HTMLOptionElement>>
  /** Fired on click */
  onClick?: () => void
  onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void
  /** called when input changes */
  value?: string | number
}

export default Select
