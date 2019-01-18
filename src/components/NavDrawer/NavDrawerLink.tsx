import React from 'react'
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
      css={props.css}
      onClick={props.onClick}
      isActive={props.isActive}
      title={props.title}
    >
      <IconMD
        css={iconStyle}
        name={props.iconName}
        size={props.iconSize || 25}
        color={'white'}
        onClick={(e: React.MouseEvent) => handleIconClick(e, props.onIconClick)}
      />
      <Expand
        from={0}
        to={props.to}
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
  /** Expanded width */
  to?: number
  /** Name of left icon */
  iconName?: md
  /** Size of icon */
  iconSize?: number
  /** Is active link */
  isActive?: boolean
  /** Is used to animate link */
  isExpanded?: boolean
  /** On Click callback */
  onClick: (e?: React.MouseEvent<HTMLInputElement>) => void
  onIconClick?: (e?: React.MouseEvent) => void
  /** Header text */
  title: string
}

const Wrapper = styled.div`
  ${({ css, isActive, theme }: IProps) => `
    align-items: center;
    background: ${isActive ? theme.palette.primary.main : 'transparent'};
    padding: ${theme.spacing.base}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:hover {
      background: ${theme.palette.primary.main};
      cursor: pointer;
    }

    ${css}
  `}
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
