import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
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
      <ButtonWrap>
        {props.selectedIndex === 0 ? (
          <BackButton disabled={true} onClick={null}>
            <IconIOS css={iconLeftCss} color="#1de9b6" name={'arrow-back'} />
            {props.previousText}
          </BackButton>
        ) : (
          <BackButton onClick={() => props.previousClick()}>
            <IconIOS css={iconLeftCss} color="#1de9b6" name={'arrow-back'} />
            {props.previousText}
          </BackButton>
        )}
        <span style={{ display: 'inline-block', width: 8 }} />
        {props.steps === props.selectedIndex + 1 ? (
          <NextButton onClick={props.completeClick}>
            {props.completeText}
            <IconIOS
              css={iconRightCss}
              color="white"
              name={'checkmark-circle-outline'}
            />
          </NextButton>
        ) : (
          <NextButton
            onClick={!props.isNextActive ? null : props.nextClick}
            disabled={!props.isNextActive}
          >
            {props.nextText}
            <IconIOS css={iconRightCss} color="white" name={'arrow-forward'} />
          </NextButton>
        )}
      </ButtonWrap>
    </Wrapper>
  )
}

/**
 * All props here are self explanitory
 */
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

const iconLeftCss = css`
  margin-right: 10px;
` as string[]
const iconRightCss = css`
  margin-left: 10px;
` as string[]

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #272727;
  box-shadow: 0 -1px 5px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.14);
  position: relative;
  z-index: 2;
`
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const baseButtonStyle = css`
font-size: 14px;
border-radius: 2px;
transition: all 0.3s;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 16px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

:hover {
  opacity: .8;
}
`
const NextButton = styled.button`
  ${baseButtonStyle}
  background-color: #008270;
  color: white;
  :disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`
const BackButton = styled.button`
  ${baseButtonStyle};
  background-color: #555;
  color: #1de9b6;

  :disabled {
    pointer-events: none;
    opacity: .3;
  }
`

export default Controls
