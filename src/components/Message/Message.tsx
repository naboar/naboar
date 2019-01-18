import React from 'react'
import styled, { css } from 'styled-components'
import { IconIOS } from '../Icon'

/**
 * Message Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const Message = (props: IMessageProps) => {
  return (
    <StyledMessage>
      <IconIOS.Black
        name={'close'}
        size={24}
        css={IconCSS}
        onClick={props.onClose}
      />
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
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    max-width: 324px;
    border-radius: ${theme.shape.borderRadius};
    height: fit-content;
    background-color: ${theme.palette.common.white};
    color: ${theme.palette.common.black};
    opacity: 0.75;
    font-family: Open-Sans, sans-serif;
    font-size: 16px;
    border: 1px solid;
    position: relative;
    i {
      color: ${theme.palette.common.black};
      opacity: .6;
    }
  `}
`
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => `
    ${theme.spacing.base * 3}px
    ${theme.spacing.base * 3}px
    ${theme.spacing.base * 2}px
    ${theme.spacing.base * 2}px
  `};
`
const Content = styled.p`
  padding: 0;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.common.black};
  opacity: .8;
`
const IconCSS = css`
  position: absolute;
  right: 8px;
  opacity: .6;
  &:hover {
    cursor: pointer;
  }
`

const ErrorMessage = styled(StyledMessage)`
  ${({ theme }) => `
    background: ${theme.palette.common.red} ;
    border-color: ${theme.palette.common.red};
  `}
`
const MainMessage = styled(StyledMessage)`
  ${({ theme }) => `
    background: ${theme.palette.primary.light} ;
    border-color: ${theme.palette.primary.main};
  `}
`
const SuccessMessage = styled(StyledMessage)`
  ${({ theme }) => `
    background: ${theme.palette.common.green} ;
    border-color: ${theme.palette.common.green};
  `}
`
const WarningMessage = styled(StyledMessage)`
  ${({ theme }) => `
    background: ${theme.palette.common.orange} ;
    border-color: ${theme.palette.common.orange};
  `}
`

const MessageBody = (props: IMessageProps) => (
  <>
    <IconIOS name={'close'}
      size={24}
      color={'black'}
      css={IconCSS}
      onClick={props.onClose}
    />
    <Body>
      <Content>{props.message}</Content>
    </Body>
  </>
)

Message.Error = (props: IMessageProps) => {
  return (
    <ErrorMessage>
      <MessageBody {...props} />
    </ErrorMessage>
  )
}

Message.Main = (props: IMessageProps) => {
  return (
    <MainMessage>
      <MessageBody {...props} />
    </MainMessage>
  )
}

Message.Success = (props: IMessageProps) => {
  return (
    <SuccessMessage>
      <MessageBody {...props} />
    </SuccessMessage>
  )
}

Message.Warning = (props: IMessageProps) => {
  return (
    <WarningMessage>
      <MessageBody {...props} />
    </WarningMessage>
  )
}

export default Message
