import React from 'react'
import styled from 'styled-components'
import { ITheme } from '../../theme'
import { IconIOS } from '../Icon'

/**
 * Badge Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const Badge = (props: IBadgeProps) => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    props.onClose(e)
  }
  return (
    <StyledBadge {...props}>
      {props.children}
      {props.onClose && (
        <CloseButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClose(e.target as any)}
        >
          <IconIOS name={'close'} size={24} color={'white'} />
        </CloseButton>
      )}
    </StyledBadge>
  )
}

/**
 * Badge prop interface
 */
interface IBadgeProps {
  /**
   * Event fired on click
   */
  onClick: () => void
  /**
   * Text displayed inside of the badge
   */
  children: JSX.Element | string
  /**
   * Toggle badge clickability
   */
  disabled?: boolean
  /**
   * Toggle if badge can close
   */
  onClose?: (e?: Event | React.MouseEvent<HTMLButtonElement>) => void
  /**
   * CSS
   */
  css?: string[]
}

const StyledBadge = styled.span`
  background-color: ${({ theme }: IProps) => theme.black};
  color: ${({ theme }: IProps) => theme.white};
`
const CloseButton = styled.button`
  transition: background 0.2s;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  font-weight: bold;
  padding: 0px 11px 9px 11px;
  border: none;
  cursor: pointer;
  :hover {
    background: #555;
  }
  ${(props: IBadgeProps) => props.css && props.css};
`
interface IProps {
  theme: ITheme
}

export default Badge
