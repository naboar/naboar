import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IconIOS } from '../../../..'
/**
 * Controls Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Controls = (props: IProps) => {
  return (
    <Wrapper>
      <div>{props.children}</div>
      <div>
        {props.selectedIndex === 0 ? (
          <button disabled={true} onClick={() => null}>
            <p>
              <IconIOS name={'arrow-back'} />
              {props.previousText}
            </p>
          </button>
        ) : (
          <button onClick={() => props.previousClick()}>
            <p>
              <IconIOS name={'arrow-back'} />
              {props.previousText}
            </p>
          </button>
        )}
        <span style={{ display: 'inline-block', width: 8 }} />
        {props.steps === props.selectedIndex + 1 ? (
          <button onClick={props.completeClick}>
            <p>
              <IconIOS name={'checkmark-circle'} />
              {props.completeText}
            </p>
          </button>
        ) : (
          <button onClick={props.nextClick} disabled={!props.isNextActive}>
            <p>
              {props.nextText}
              <IconIOS name={'arrow-forward'} />
            </p>
          </button>
        )}
      </div>
    </Wrapper>
  )
}

interface IProps {
  children?: ReactNode | ReactNode[]
  isNextActive?: boolean
  nextText: string
  previousText: string
  completeText: string
  nextClick: () => void
  previousClick: () => void
  completeClick: () => void
  selectedIndex: number
  steps: number
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #272727;
`

export default Controls
