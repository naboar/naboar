import React, { Component, ReactElement } from 'react'
import styled, {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { IStyledComponentProps } from '../../../interfaces/IStyledComponentProps'
import { ITabItemProps } from '../TabItem/TabItem'

/**
 * Tabs Component
 *
 * Takes children of type ```<TabItem />```
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Tabs = (props: ITabsProps) => {
  const { children, css } = props

  return (
    <Wrapper className={'tabs'}>
      <TopBar>
        {props.children.map((item, i) => (
          <TopItem
            key={`item_${i}_${item.key}`}
            id={`item_${i}_${item.key}`}
            isActive={item.key === props.activeKey}
            isDisabled={item.props.isDisabled}
            onClick={() => props.onChange(String(item.key))}
            css={css}
          >
            {item.props.title}
          </TopItem>
        ))}
      </TopBar>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          isActive: props.activeKey === child.key,
        }),
      )}
    </Wrapper>
  )
}

interface ITabsProps extends IStyledComponentProps {
  /** Tab content */
  children: Array<ReactElement<ITabItemProps>>
  /** Function called with new key */
  onChange?: (key: string) => void
  /** Active key */
  activeKey?: string
}

const Wrapper = styled.div``
const TopBar = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.palette.grey[800]};
`
const TopItem = styled.button<{
  isActive: boolean
  isDisabled: boolean
  css?: FlattenSimpleInterpolation | FlattenInterpolation<any>
}>`
  transition: all 0.2s;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: -2px;
  padding: 8px 8px 12px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.primary.light : 'rgba(255,255,255,.8)'};
  pointer-events: ${({ isActive, isDisabled }) =>
    isActive || isDisabled ? 'none' : 'default'};
  border-bottom: ${({ theme, isActive }) =>
    isActive
      ? `2px solid ${theme.palette.primary.main}`
      : `2px solid transparent`};

  ${({ isDisabled }) => isDisabled && 'opacity: .7;'}
  :hover {
    color: ${({ theme, isActive }) => !isActive && theme.palette.primary.light};
  }

  ${({ css }) => (css ? css : '')};
`

export default Tabs
