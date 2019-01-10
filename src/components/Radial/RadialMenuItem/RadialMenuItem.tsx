import React, { MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'
import { IconIOS } from '../../Icon'
import { iOS } from '../../Icon/IconTypes'

/**
 * Radial Menu Item Component
 * 
 * To be implmented as a child of ```<Radial />```
 * 
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
export const RadialMenuItem = ({
  iconName,
  onClick,
  active,
  title,
  index,
  total,
}: IItemProps) => (
  <ItemWrapper index={index} total={total}>
    <ItemButton
      onClick={onClick}
      active={active}
      title={title}
      index={index}
      total={total}
    >
      <IconIOS name={iconName} css={iconCss} />
    </ItemButton>
  </ItemWrapper>
)

export interface IItemProps {
  /** Title displayed on hover */
  title: string
  /** IOS icon name to be displayed in button */
  iconName: iOS
  /** Event fired on click of button */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** @ignore */
  active?: boolean
  /** @ignore */
  index?: number
  /** @ignore */
  total?: number
}

const iconCss = css`
  color: white;
  font-size: 20px;
` as string[]

const ItemWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  ${({ index, total }: { index: number; total: number }) =>
    `transform: rotate(${(360 / total) * index + 5}deg)`};
`

const ItemButton = styled.button<{
  index: number
  total: number
  active?: boolean
}>`
  position: absolute;
  transition-property: top, opacity;
  transition-duration: 0.3s;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
  border: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  ${({ index, total }) =>
    `transform: rotate(-${(360 / total) * index +
      5}deg); transition-delay: ${(index * 0.45) / total}s`};

  ${({ active }) =>
    active
      ? `top: -108%; opacity: 1; pointer-events: all;`
      : `top: 0; opacity: 0; pointer-events: none;`};

  background: #008270;

  :focus {
    outline: none;
    box-sizing: border-box;
  }
  :active {
    ${({ index, total }) =>
      `transform: scale(.95) rotate(-${(360 / total) * index + 5}deg)`};
    box-shadow: none;
  }
`

export default RadialMenuItem