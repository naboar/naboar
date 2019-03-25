import React from 'react'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { IconMD } from '../Icon'

/**
 * ErrorModal Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const ErrorModal = (props: IErrorModalProps) => {
  return (
    <StyledModal className={'errorModal'}>
      <Heading>
        <IconMD.White name={'alert'} size={72} />
      </Heading>
      <Body>
        <Title>{props.title}</Title>
        <Content>{props.message}</Content>
      </Body>
      <Action onClick={props.onClick}>Close</Action>
    </StyledModal>
  )
}

/**
 * ErrorModal prop interface
 */
interface IErrorModalProps {
  /** Title of ErrorModal */
  title: string
  /** Message of ErrorModal */
  message: string
  /** On Click for ErrorModal button */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledModal = styled.div`
  color: ${({ theme }) => theme.palette.common.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0;
  width: 500px;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  height: 300px;
  background-color: ${({ theme }) => theme.palette.common.white};
  font-family: Open-Sans, sans-serif;
  font-size: 16px;
  border: none;
`
const Heading = styled.div`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.shape.borderRadius} ${theme.shape.borderRadius} 0 0;
    background-color: ${theme.palette.common.red};
    padding: ${theme.spacing.base * 2}px;
    margin: 0;
  `}
`
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 16px;
`
const Content = styled.p`
  padding: 0;
  font-weight: normal;
`
const Action = styled.button`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 ${theme.shape.borderRadius} ${theme.shape.borderRadius};
    border: none;
    background-color: ${theme.palette.common.red};
    padding: ${theme.spacing.base * 2}px;
    font-size: 18px;
    color: ${theme.palette.common.white};
    &:hover {
      opacity: .9;
      cursor: pointer;
    }
  `}
`
interface IProps extends IStyledComponentProps {
  disabled?: boolean
}

export default ErrorModal
