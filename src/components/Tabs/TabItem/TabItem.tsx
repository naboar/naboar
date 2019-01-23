import React, { Component, ReactElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'

/**
 * TabItem Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const TabItem = (props: ITabItemProps) => {
  return <Wrapper isActive={props.isActive}>{props.children}</Wrapper>
}

export interface ITabItemProps {
  /** Tab content */
  children: ReactNode
  /** Title of tab */
  title: string
  /** unique identifier for TabItem */
  itemKey: string | number
  /** Is this tab disabled */
  isDisabled?: boolean
  /** @ignore */
  isActive?: boolean
}

const Wrapper = styled.div<{ isActive: boolean }>`
  display: none;
  ${({ isActive }) => isActive && 'display: block;'};
  ${({ theme }) => `color: ${theme.palette.text.primary}`};
`

export default TabItem
