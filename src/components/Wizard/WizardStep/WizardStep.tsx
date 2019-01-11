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

const WizardStep = (props: IStepProps) => {
  return <Wrapper>WizardStep</Wrapper>
}

export interface IStepProps {
  children: ReactNode
  title: string
  timelineTitle?: string
  name: string
}

const Wrapper = styled.div`
  margin: 0;
  padding: 30px;
  background-color: #262626;
  box-sizing: border-box;
  color: rgba(255,255,255, .8);
  font-family: Open-Sans, sans-serif;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

export default WizardStep
