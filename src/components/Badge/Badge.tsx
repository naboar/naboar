import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../../theme'
import { IconIOS, iOS } from '../Icon'

/**
 * Badge Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const Badge = (props: IBadgeProps) => {
  return (
    <StyledBadge css={props.css}>
      {props.children}
      {props.canClose && (
        <IconIOS
          css={closeIconStyle}
          name={'close'}
          size={25}
          color={'white'}
          onClick={props.onClose}
        />
      )}
    </StyledBadge>
  )
}

/**
 * Badge prop interface
 */
interface IBadgeProps {
  /** Toggle Badge close option */
  canClose?: boolean
  /** Text displayed inside of the badge */
  children: JSX.Element | string
  /** CSS */
  css?: FlattenSimpleInterpolation
  /** Toggle badge clickability */
  disabled?: boolean
  /** On Close click */
  onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledBadge = styled.div`
  flex-grow: 0;
  background-color: #8DA6C3;
  font-size: 16px;
  border: 1px solid;
  border-radius: 4px;
  color: ${({ theme }: IProps) => theme.white};
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  ${(props: IProps) => props.css && props.css}
`
const closeIconStyle = css`
  margin: 0;
  padding: 0 0 0 8px;
  &:hover {
    cursor: pointer;
  }
`
interface IProps {
  css?: FlattenSimpleInterpolation
  theme: ITheme
  disabled?: boolean
}

export default Badge
