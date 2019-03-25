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
    <StyledBadge css={props.css} color={props.color} className={'badge'}>
      {props.children}
      {props.canClose && (
        <IconIOS.White
          css={closeIconStyle}
          name={'close'}
          size={20}
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
  children: React.ReactNode
  /** Toggle badge clickability */
  disabled?: boolean
  /** On Close click */
  onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** @ignore */
  color?: string
}

const StyledBadge = styled.div<IBadgeProps>`
  flex-grow: 0;
  font-size: 12px;
  font-weight: bold;
  min-height: 24px;
  ${({ color, theme }) => `
    background-color: ${ color === 'main'
      ? theme.palette.primary.main
      : color === 'red'
      ? theme.palette.common.red
      : color === 'green'
      ? theme.palette.common.green
      : color === 'orange'
      ? theme.palette.common.orange
      : color === 'purple'
      ? theme.palette.common.purple
      : color === 'teal'
      ? theme.palette.common.teal
      : theme.palette.primary.main

    }};
    color: ${theme.palette.common.white};
    padding: 0 ${theme.spacing.base}px;
    border-radius: ${theme.shape.borderRadius};
  `};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  ${(props) => props.css && props.css}
`
const closeIconStyle = css`
  margin: 0;
  padding: 0 0 0 8px;
  &:hover {
    cursor: pointer;
  }
`

const GreenBadge = (props: IBadgeProps) => <Badge color={'green'} { ...props } />
const MainBadge = (props: IBadgeProps) => <Badge color={'main'} { ...props } />
const OrangeBadge = (props: IBadgeProps) => <Badge color={'orange'} { ...props } />
const PurpleBadge = (props: IBadgeProps) => <Badge color={'purple'} { ...props } />
const RedBadge = (props: IBadgeProps) => <Badge color={'red'} { ...props } />
const TealBadge = (props: IBadgeProps) => <Badge color={'teal'} { ...props } />

Badge.Green = GreenBadge
Badge.Main = MainBadge
Badge.Orange = OrangeBadge
Badge.Purple = PurpleBadge
Badge.Red = RedBadge
Badge.Teal = TealBadge


export default Badge
