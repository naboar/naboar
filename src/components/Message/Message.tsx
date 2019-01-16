import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../../theme'
import { IconIOS } from '../Icon'

/**
 * Message Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const Message = (props: IMessageProps) => {
  return (
    <StyledMessage>
      <IconIOS name={'close'} size={24} color={'black'} css={IconCSS} onClick={props.onClose}/>
      <Body>
        <Content>{props.message}</Content>
      </Body>
    </StyledMessage>
  )
}

/**
 * Message prop interface
 */
interface IMessageProps {
  /** Message of Message */
  message: string
  /** On Click for Message button */
  onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0;
  max-width: 324px;
  border-radius: 2px;
  height: fit-content;
  background-color: ${({ theme }: IProps) => theme.white};
  color: ${({ theme }: IProps) => theme.black};
  opacity: 0.75;
  font-family: Open-Sans, sans-serif;
  font-size: 16px;
  border: solid 1px ;
  position: relative;
`
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 24px 16px 16px;
`
const Content = styled.p`
  padding: 0;
  font-weight: normal;
`
const IconCSS = css`
  position: absolute;
  right: 8px;
  &:hover {
    cursor: pointer;
  }
`
interface IProps {
  css?: FlattenSimpleInterpolation
  theme: ITheme
}

export default Message
