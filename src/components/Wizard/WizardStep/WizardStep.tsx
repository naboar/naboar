import React, { ReactNode } from 'react'
import styled from 'styled-components'

/**
 * Wizard Step Component
 *
 * Expacted child of ```<Wizard />```
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */

const WizardStep = ({
  timelineTitle,
  title,
  children,
  hideTitle,
  isActive,
  isPrev
}: IStepProps) => {
  return (
    <Wrapper isActive={isActive} isPrev={isPrev}>
      {!hideTitle && <Title>{timelineTitle || title}</Title>}
      {children}
    </Wrapper>
  )
}

export interface IStepProps {
  /** Can be anything */
  children: ReactNode
  /** Title to be displayed on pane */
  title: string
  /** Title to be displayed on top bar */
  timelineTitle?: string
  /** key for validation */
  name: string
  /** Should the title be displayed on the pane */
  hideTitle?: boolean
  /** @ignore */
  isActive?: boolean
  /** @ignore */
  isPrev?: boolean
}

const Wrapper = styled.div<{ isActive?: boolean, isPrev?: boolean }>`
  transition: opacity 0.5s, transform .6s;
  margin: 0;
  padding: 30px 30px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.common.white};
  font-family: Open-Sans, sans-serif;

  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  ${({ isActive }) => !isActive && `pointer-events: none; visibility: hidden; transform: translateX(100%)`}
  ${({ isPrev }) => isPrev && `pointer-events: none; transform: translateX(-100%)`}
`

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`

export default WizardStep
