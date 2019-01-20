import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'

/**
 * NavBarLink Component
 * @since v1.0.0
 * @author Tracey King
 */

const NavBarLink = (props: INavBarLinkProps) => {
  return (
    <Wrapper css={props.css} onClick={props.onClick} isActive={props.isActive}>
      {props.children || props.title}
    </Wrapper>
  )
}

/**
 * NavBarLink prop interface
 */
export interface INavBarLinkProps extends IStyledComponentProps {
  /** Children */
  children?: React.ReactNode
  /** Is active link */
  isActive?: boolean
  /** On Click callback */
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void
  /** Header text */
  title?: string
}

const Wrapper = styled.div`
  ${({ css, isActive, theme }: INavBarLinkProps) => `
    align-items: center;
    background: ${isActive ? theme.palette.primary.main : 'transparent'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    white-space: nowrap;
    height: 40px;
    padding: 0 15px;
    font-size: 14px;
    min-width: 133px;
    &:hover {
      cursor: pointer;
      background: ${theme.palette.primary.main};
    }

    ${css ? css : ''}
  `}
`

export default NavBarLink
