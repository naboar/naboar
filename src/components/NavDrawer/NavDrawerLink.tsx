import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Expand from '../../effects/Expand'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { IconMD, md } from '../Icon'

const handleIconClick = (e: React.MouseEvent, iconClick: () => void) => {
  if (!iconClick) {
    return
  }

  e.preventDefault()
  e.stopPropagation()

  iconClick()
}

/**
 * NavDrawerLink Component
 * @since v1.0.0
 * @author Tracey King
 */

const NavDrawerLink = (props: INavDrawerLinkProps) => {
  return (
    <Wrapper
      to={props.linkRoute}
      css={props.css}
      title={props.title}
      className={'navDrawerLink'}
    >
      <IconMD.White
        css={iconStyle}
        name={props.iconName}
        size={props.iconSize || 25}
        onClick={(e: React.MouseEvent) => handleIconClick(e, props.onIconClick)}
      />
      <Expand
        from={0}
        to={props.expandTo}
        isExpanded={props.isExpanded}
        css={['flex: 1; overflow: hidden; white-space: nowrap;']}
      >
        <div>{props.title}</div>
      </Expand>
    </Wrapper>
  )
}

/**
 * NavDrawerLink prop interface
 */
interface INavDrawerLinkProps extends IStyledComponentProps {
  /** Toggle input clickability */
  disabled?: boolean
  /** Amount to be expanded in pixels */
  expandTo: number
  /** Location when link is clicked */
  linkRoute: string
  /** Name of left icon */
  iconName?: md
  /** Size of icon */
  iconSize?: number
  /** Is used to animate link */
  isExpanded?: boolean
  /** On Click event for Icon */
  onIconClick?: (e?: React.MouseEvent) => void
  /** Header text */
  title: string
}

const Wrapper = styled(NavLink)<IProps>`
  ${({ theme }) => `
    color: white;
    text-decoration: none;
    transition: background-color .2s;
    align-items: center;
    background: 'transparent'
    padding: ${theme.spacing.base}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:hover {
      background: ${theme.palette.primary.main};
      cursor: pointer;
    }
    &.active {
      background: ${theme.palette.primary.main};
    }
  `}
  ${({ css }) => css}
`

const iconStyle = [`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`]

interface IProps extends IStyledComponentProps {
  isActive?: boolean
}

export default NavDrawerLink
