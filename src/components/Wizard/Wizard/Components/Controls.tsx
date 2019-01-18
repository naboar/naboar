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
          <NextButton onClick={props.completeClick} isSubmit={true}>
            {props.completeText}
            <IconIOS.White
              css={iconRightCss}
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
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.base * 2}px;
    background-color: ${theme.palette.secondary.main};
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.14);
    position: relative;
    z-index: 2;
  `}
`
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const baseButtonStyle = css`
  font-size: 14px;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  :hover {
    opacity: 0.8;
  }
`
const NextButton = styled.button<{ isSubmit?: boolean }>`
  ${baseButtonStyle}
  ${({ isSubmit, theme }) => `
    background-color: ${theme.palette.primary.main};
    color: white;
    border-radius: ${theme.shape.borderRadius};
    padding: ${theme.spacing.base}px ${theme.spacing.base * 2}px;
    ${isSubmit && `
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
      i {
        color: ${theme.palette.common.white};
      }
    `}
  `}
:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`
const BackButton = styled.button`
  ${baseButtonStyle};
  ${({ theme }) => `
    background-color: ${theme.palette.grey[600]};
    color: ${theme.palette.primary.light};
    border-radius: ${theme.shape.borderRadius};
    padding: ${theme.spacing.base}px ${theme.spacing.base * 2}px;
    i {
      color: ${theme.palette.primary.light};
    }
  `}

  :disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`

export default Controls
