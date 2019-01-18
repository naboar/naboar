import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { ITheme } from '../../theme'
import { IconIOS } from '../Icon'

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
          size={20}
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
interface IBadgeProps extends IStyledComponentProps {
  /** Toggle Badge close option */
  canClose?: boolean
  /** Text displayed inside of the badge */
  children: JSX.Element | string
  /** Toggle badge clickability */
  disabled?: boolean
  /** On Close click */
  onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledBadge = styled.div`
  flex-grow: 0;
  font-size: 12px;
  font-weight: bold;
  min-height: 24px;
  ${({ theme }: IProps) => `
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    padding: 0 ${theme.spacing.base}px;
    border-radius: ${theme.shape.borderRadius};
  `};
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
